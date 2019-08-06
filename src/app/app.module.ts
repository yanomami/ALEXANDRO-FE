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

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './core/interceptor';
import { RegisterComponent } from './components/register/register.component';

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
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
