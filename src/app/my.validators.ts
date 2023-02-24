import { FormControl } from '@angular/forms';

export class MyValidators {
  static restrictedEmails(control: FormControl): { [key: string]: boolean } {
    if (['test@test.test', 'test@test.com'].includes(control.value)) {
      return { restrictedEmail: true };
    }
    return {};
  }

  static restrictedEmailsServices(control: FormControl): {
    [key: string]: boolean;
  } {
    const resultedArray: boolean = ['mail.ru', '.ru'].some((el) => {
      return control.value.endsWith(el);
    });
    if (resultedArray) {
      return { restrictedEmailsServices: true };
    }
    return {};
  }
}
