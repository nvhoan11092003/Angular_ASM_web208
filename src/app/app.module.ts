import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
// import { ProductComponent } from './components/product/product.component';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatInputModule } from '@angular/material/input';
import { SignUpComponent } from './pages/client/sign-up/sign-up.component';
import { SignInComponent } from './pages/client/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HeaderAdminComponent } from './pages/admin/header-admin/header-admin.component';
// import { HeaderComponent } from './components/header/header.component';
// import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
 
    SliderComponent,
    SignUpComponent,
    SignInComponent,
    AppComponent,
    LayoutAdminComponent,
    LayoutComponent,
    DashboardComponent,
    HeaderAdminComponent,
    // HeaderComponent,
    // MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatAutocompleteModule,
    // MatInputModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    FooterComponent
  ]
})
export class AppModule { }
