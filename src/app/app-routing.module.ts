import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCountryComponent} from './components/country/list-country/list-country.component';
import {HomeComponent} from './components/home/home.component';
import {SearchCountryComponent} from './components/country/search-country/search-country.component';

const routes: Routes = [
  {path: 'countries', component: ListCountryComponent},
  {path: 'searchCountries', component: SearchCountryComponent},
  {path: 'home', component: HomeComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
