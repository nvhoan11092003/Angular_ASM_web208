import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
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
export class AppRoutingModule { }
