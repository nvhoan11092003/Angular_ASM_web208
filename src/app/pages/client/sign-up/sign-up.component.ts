
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
  
export class SignUpComponent {
  submited = false

  signupform = new FormGroup({
    name: new FormControl("", [Validators.required ]),
    email : new FormControl("",[Validators.required ]),
    password : new FormControl("",[Validators.required ]),
    Confirmpassword : new FormControl("",[Validators.required ]),
  })

  get name() {
    return this.signupform.get("name")
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
    
      console.log('signup submitted:', this.signupform.value);
        // Goi API
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
