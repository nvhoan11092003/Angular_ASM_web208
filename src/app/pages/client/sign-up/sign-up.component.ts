import { FormBuilder } from '@angular/forms';
import { UserService } from './../../../user.service';

import { IUsersignup } from './../../../common/user';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
  
export class SignUpComponent {
  submited = false
  constructor(
private UserService : UserService,
    private fb: FormBuilder
  ) { }
 
  signupform = this.fb.group({
    name: new FormControl("", [Validators.required]),
    number: new FormControl(null, [Validators.required]),
    email: new FormControl("", [Validators.required , Validators.email]),
    password: new FormControl("", [Validators.required ,Validators.minLength(6)] ,),
    Confirmpassword: new FormControl("", [Validators.required ,Validators.minLength(6)]),
  })

 

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
  
  getpwErrorMessage() {
    if (this.password) {
      if (this.password.hasError('required') || "") {
        return 'password is required';
      }
      if (this.password.value !== this.Confirmpassword?.value) {
        return 'passwords do not match';
      }
      if (this.password?.value!.length < 6) {
        console.log(this.password?.value!.length);
        
        return "password must not be less than 6"
      }
    }
    return false
  }

  get name() {
    return this.signupform.get("name")
  }
  get number() {
    return this.signupform.get("number")
  }
  get email() {
    return this.signupform.get("email")
  }
  get password() {
    return this.signupform.get("password")
  }
  get Confirmpassword() {
    return this.signupform.get("Confirmpassword")
  }
  
  onSubmit() {
    if (this.signupform.valid) {  
      this.submited = true
      const userformsignup: IUsersignup = {
        name: this.name?.value || "",
        number: this.number?.value || 0,
        email: this.email?.value || "",
        confirmPassword: this.Confirmpassword?.value || "",
        password: this.password?.value || "", }
      console.log('signup submitted:', this.signupform.value);
      // Goi API
      this.UserService.signup(userformsignup).subscribe(data  => {
        alert("Đăng Ký Thành Công Tài Khoản")       
       const { user } = data
        console.log("data dang ky", user);
        // Dang ky song thi dang nhap luon
        if (user) {
          this.UserService.signin(this.email?.value || "" , this.password?.value  || "")
        }
      })
    } else {

      this.submited = true
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
