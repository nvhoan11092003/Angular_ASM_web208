import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './pages/client/sign-up/sign-up.component';
import { SignInComponent } from './pages/client/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HeaderAdminComponent } from './pages/admin/header-admin/header-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductComponent } from './pages/client/product/product.component';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BlogComponent } from './pages/client/blog/blog.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    SliderComponent,
    SignUpComponent,
    SignInComponent,
    AppComponent,
    LayoutAdminComponent,
    LayoutComponent,
    DashboardComponent,
    HeaderAdminComponent,
    HeaderComponent,
    MenuComponent,
    NotFoundComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatAutocompleteModule,
    // MatInputModule
    FormsModule, CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    FooterComponent
  ]
})
export class AppModule { }
