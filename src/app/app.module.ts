import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { DetailComponent } from './pages/detail/detail.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    DetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
