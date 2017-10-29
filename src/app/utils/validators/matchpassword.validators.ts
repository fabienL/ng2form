import {FormGroup} from '@angular/forms';

export function matchPassword(formgroup: FormGroup) {

  const passwords = Object.keys(formgroup.value).map(key => formgroup.value[key]);

  if (passwords[0] !== passwords[1]) {
    return {'confirmpassword': true};
  } else {
    return null;
  }
}
