import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'ASM_WEB208';
    name = 'dev';
    VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    constructor(
        private router: Router
    ) { }
    // check quyen
    checkquyen() {
        localStorage.getItem('user')
    }




}


