import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // { path: "", component: }, homepage
    // { path: "**", component: }, homepage
    // {path : "product/:id" , component : }, deail product
    // {path : "signin" , component : },
    // {path : "signup" , component : },
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
