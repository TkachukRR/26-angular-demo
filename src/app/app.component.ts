import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './my.validators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular forms';

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmails,
        // MyValidators.restrictedEmailsServices,
        // MyValidators.uniqEmail,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      address: new FormGroup({
        country: new FormControl('pl'),
        city: new FormControl('Warsaw', Validators.required),
      }),
      skills: new FormArray([]),
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('form:', this.form);
      const formData = { ...this.form.value };
      console.log('formData:', formData);

      this.form.reset();
    }
  }

  setCapitalCity() {
    const capitalCityMap = {
      ua: 'Kyiv',
      pl: 'Warsaw',
      by: 'Minsk',
    };

    const city =
      capitalCityMap[this.form.get('address')?.get('country')?.value];

    this.form.patchValue({ address: { city: city } });
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // <FormArray>this.form['skills']?.push(control);
    (this.form.get('skills') as FormArray).push(control);
    console.log('control', control);
    console.log(this.form.get('skills'));
  }
}
