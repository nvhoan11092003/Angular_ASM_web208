import { iuser } from './../../models/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
  
export class SignUpComponent {
  user : iuser = {
    name: '',
    email: '',
    password: '',
    Confirmpassword: ""
  }
  onSubmit() {
    console.log('Login submitted:', this.user);
    // Goi API
  }
}
