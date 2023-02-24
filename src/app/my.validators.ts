import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

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

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'async@cc.cc') {
          resolve({
            uniqEmail: true,
          });
        } else {
          resolve(null);
        }
      }, 3000);
    });
  }
}
