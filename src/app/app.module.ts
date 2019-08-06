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
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
          return     localStorage.getItem('token'); },
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['localhost:8080/alexandro/login', 'localhost:8080/alexandro/register']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
