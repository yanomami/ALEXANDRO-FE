import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { ListCountryComponent } from './components/countries/list-country/list-country.component';
import { AddCountryComponent } from './components/countries/add-country/add-country.component';
import { EditCountryComponent } from './components/countries/edit-country/edit-country.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchCountryComponent } from './components/countries/search-country/search-country.component';
import { ViewCountryComponent } from './components/countries/view-country/view-country.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewProductComponent } from './components/products/view-product/view-product.component';
import { LoginComponent } from './components/login/login.component';

import { HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ListClientComponent } from './components/clients/list-client/list-client.component';
import { CaddiesComponent } from './components/caddies/caddies.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderResumeComponent } from './components/order-resume/order-resume.component';
import { ListOrderHeaderComponent } from './components/order-headers/list-order-header/list-order-header.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    ListCountryComponent,
    AddCountryComponent,
    EditCountryComponent,
    NavbarComponent,
    HomeComponent,
    SearchCountryComponent,
    ViewCountryComponent,
    ListProductComponent,
    FooterComponent,
    ViewProductComponent,
    LoginComponent,
    RegisterComponent,
    ListClientComponent,
    CaddiesComponent,
    CheckoutComponent,
    OrderResumeComponent,
    ListOrderHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Add automatically in the request header : 'Authorization: Bearer' + token
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['localhost:8080/alexandro/login', 'localhost:8080/alexandro/register']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
