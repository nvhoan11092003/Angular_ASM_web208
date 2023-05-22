import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { SignUpComponent } from './pages/client/sign-up/sign-up.component';
import { SignInComponent } from './pages/client/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/client/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './layout/layout/layout.component';
// import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: "product/:id", component: DetailComponent },
      {
        path: 'signin',
        component: SignInComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },

    ],
  },

  // Ứng dụng phía máy chủ: (admin)
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      //   { path: 'products', component: ProductComponent },
    ],
  }

  // ứng dụng phía khách:



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
