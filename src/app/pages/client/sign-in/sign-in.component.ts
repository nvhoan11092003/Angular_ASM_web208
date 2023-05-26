import { FormGroup, Validators, FormControl } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
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
    } else {
      this.submited = true
      console.log("invalid");

    }

  
  }

}
