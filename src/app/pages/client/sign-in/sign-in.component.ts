import { SignupService } from './../../../signup.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  submited = false
  constructor(
    private SignupService: SignupService
  ){}

  signinform = new FormGroup({
    email : new FormControl("",[Validators.required ]),
    password : new FormControl("",[Validators.required ]),
  })
  get email() {
    return this.signinform.get("email")
  }
  get password() {
    return this.signinform.get("password")
  }

  
  onSubmit() { 
    if (this.signinform.valid) {
      const user = {
        email: this.email?.value || "",
        password: this.password?.value || "",
      }
      console.log('Login submitted:', this.signinform.value);
        // Goi API
      this.SignupService.signin(user).subscribe(data => {
          console.log(data);
          
      })

    } else {
      this.submited = true
      console.log("invalid");

    }

  
  }

   gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    // console.log(this.products);

  }

}
