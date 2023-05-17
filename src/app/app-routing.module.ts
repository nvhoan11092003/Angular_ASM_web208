import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // { path: "", component: }, homepage
    // { path: "**", component: }, homepage
    // {path : "product/:id" , component : }, deail product
    {path : "signin" , component : SignInComponent },
    {path : "signup" , component : SignUpComponent },
    // {path : "" , component : },
    // {path : "" , component : },
    // {path : "" , component : },
    // {path : "" , component : },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
