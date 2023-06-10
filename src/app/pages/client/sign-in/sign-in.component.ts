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
  errer = false
  signinform = new FormGroup({
    email : new FormControl("",[Validators.required ,Validators.email]),
    password : new FormControl("",[Validators.required,Validators.minLength(6) ]),
  })
  get email() {
    return this.signinform.get("email")
  }
  get password() {
    return this.signinform.get("password")
  }
  getpwErrorMessage() {
    if (this.password) {
      if (this.password.hasError('required') || "") {
        return 'password is required';
      }     
      if (this.password?.value!.length < 6) {
        return "password must not be less than 6"
      }
    }
    return false
  }
  getemailErrorMessage() {
    if (this.email) {
     if (this.email.hasError('required') || "") {
       return 'Email is required';
     }
     if (this.email.hasError('email')) {
       return 'Email is Invalid';
      }
      if (this.email.hasError('unique')) {
       return 'Email is registered';
     }
     }    
   throw new Error('Lỗi không rõ nguyên nhân');
 
  }

  onSubmit() { 
    if (this.signinform.valid) {
      console.log('Login submitted:', this.signinform.value);
      this.submited = true
      // Goi API
     try {
    const er =  this.UserService.signin(this.email?.value || "", this.password?.value || "")
      console.log( this.UserService.signin(this.email?.value || "", this.password?.value || "")
       );
       if (typeof er === "undefined") {
         this.errer = true
         console.log("looix");
         this.submited = true
       }
     } catch (error) {
      this.submited = true
        this.errer = false
      }
        
    } else {
      this.submited = true
      this.errer = false
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
