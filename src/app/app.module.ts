import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCountryComponent } from './country/list-country/list-country.component';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { EditCountryComponent } from './country/edit-country/edit-country.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCountryComponent,
    AddCountryComponent,
    EditCountryComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
