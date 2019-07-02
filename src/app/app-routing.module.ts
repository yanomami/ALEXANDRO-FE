import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCountryComponent} from './components/country/list-country/list-country.component';
import {HomeComponent} from './components/home/home.component';
import {SearchCountryComponent} from './components/country/search-country/search-country.component';
import {AddCountryComponent} from './components/country/add-country/add-country.component';

const routes: Routes = [
  {path: 'countries', component: ListCountryComponent},
  {path: 'searchCountries', component: SearchCountryComponent},
  {path: 'addCountry', component: AddCountryComponent},
  {path: 'home', component: HomeComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
