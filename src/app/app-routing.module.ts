import { MyGuardGuard } from './my-guard.guard';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { SignUpComponent } from './pages/client/sign-up/sign-up.component';
import { SignInComponent } from './pages/client/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/client/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BlogComponent } from './pages/client/blog/blog.component';
import { CategorysComponent } from './layout/layout-admin/categorys/categorys.component';
import { AddProductsComponent } from './layout/layout-admin/add-products/add-products.component';
import { UpdateProductsComponent } from './layout/layout-admin/update-products/update-products.component';
import { ListUsersComponent } from './layout/layout-admin/list-users/list-users.component';
import { ListBrandsComponent } from './layout/layout-admin/list-brands/list-brands.component';
import { AddBrandComponent } from './layout/layout-admin/add-brand/add-brand.component';
import { UpdateBrandComponent } from './layout/layout-admin/update-brand/update-brand.component';

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
      { path: 'blog', component: BlogComponent },

    ],
  },


  // Ứng dụng phía máy chủ: (admin)
  {
    path: 'admin',
    component: LayoutAdminComponent,
    canActivate : [MyGuardGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'categorys', component: CategorysComponent },
      { path: 'add-product', component: AddProductsComponent },
      { path: 'update-product/:id', component: UpdateProductsComponent },
      { path: 'accounts', component: ListUsersComponent },

      //brand
      { path: 'brands', component: ListBrandsComponent },
      { path: 'add-brand', component: AddBrandComponent },
      { path: 'update-brand/:id', component: UpdateBrandComponent },
    ],
  },
  { path: '**', component: NotFoundComponent }
  // ứng dụng phía khách:



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
