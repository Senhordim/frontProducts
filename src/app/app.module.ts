import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from "./app.router";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
