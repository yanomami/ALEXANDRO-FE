import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCountryComponent} from './components/country/list-country/list-country.component';
import {HomeComponent} from './components/home/home.component';
import {SearchCountryComponent} from './components/country/search-country/search-country.component';
import {AddCountryComponent} from './components/country/add-country/add-country.component';
import {EditCountryComponent} from './components/country/edit-country/edit-country.component';

const routes: Routes = [
  {path: 'countries', component: ListCountryComponent},
  {path: 'countries/search', component: SearchCountryComponent},
  {path: 'countries/add', component: AddCountryComponent},
  {path: 'countries/edit/:id', component: EditCountryComponent},
  {path: 'home', component: HomeComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
