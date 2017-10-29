import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {matchPassword} from '../utils/validators/matchpassword.validators';

@Component({
  selector: 'user-form',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  public userform: FormGroup;


  constructor() {
  }

  ngOnInit(): void {

    this.userform = new FormGroup({
      username: new FormControl('', [Validators.required]),
      useremail: new FormControl(null, [Validators.required, Validators.email]),
      cgu: new FormControl(null, [Validators.required]),
      passwordFormGroup: new FormGroup({
        userpassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
        userconfirmpassword: new FormControl(null, [Validators.required, Validators.minLength(8)])
      }, matchPassword)
    });

  }

  showErrorRequired(fieldName): Boolean {
    return this.userform.controls[fieldName].errors && this.userform.controls[fieldName].touched;
  }

  validateForm(): void {
    if (this.userform.status === 'VALID') {
      console.log('SEND Request');
    } else {
      this.userform.updateValueAndValidity();
    }
  }

}
