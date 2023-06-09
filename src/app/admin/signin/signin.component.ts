import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  formSignin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private auth: UserService) {}

  onHandleSubmit() {
    if (this.formSignin.valid) {
      this.auth.signin(this.formSignin.value).subscribe(data => {
        console.log(data);
      });
    }
  }
}