import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    // { path: "**", component: }, homepage
    // {path : "product/:id" , component : }, deail product
    // {path : "signin" , component : },
    // {path : "signup" , component : },
    { path: "signin", component: SigninComponent },
    // {path : "" , component : },
    // {path : "" , component : },
    // {path : "" , component : },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
