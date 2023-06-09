import { SignupService } from './../../../signup.service';
import { IUser } from './../../../common/user';

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
    private SignupService: SignupService
  ){}
 
  signupform = new FormGroup({
    name: new FormControl("", [Validators.required]),
    number: new FormControl(null , [Validators.required ]),
    email : new FormControl("",[Validators.required ]),
    password : new FormControl("",[Validators.required ]),
    Confirmpassword : new FormControl("",[Validators.required ]),
  })

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
      const user: IUser = {
        name: this.name?.value || "",
        number: this.number?.value || 0,
        email: this.email?.value || "",
        confirmPassword: this.Confirmpassword?.value || "",
        password: this.password?.value || "",
     
      }
      console.log('signup submitted:', this.signupform.value);
      // Goi API
      this.SignupService.signup(user).subscribe(data => {
        console.log(data);
        alert("Đăng Ký Thành Công Tài Khoản")
            if (data.id) {
              

            }
      })
    }
    else {
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
