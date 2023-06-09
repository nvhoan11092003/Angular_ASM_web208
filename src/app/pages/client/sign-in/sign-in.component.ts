import { UserService } from './../../../user.service';

import { Router } from '@angular/router';

import { FormGroup, Validators, FormControl } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
 
  constructor(
    private UserService: UserService,
  ){}
  submited = false
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
      console.log('Login submitted:', this.signinform.value);
      // Goi API
      this.UserService.signin(this.email?.value || "" , this.password?.value  || "")
    
      
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
