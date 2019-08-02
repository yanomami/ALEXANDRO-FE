import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCountryComponent} from './components/countries/list-country/list-country.component';
import {HomeComponent} from './components/home/home.component';
import {SearchCountryComponent} from './components/countries/search-country/search-country.component';
import {AddCountryComponent} from './components/countries/add-country/add-country.component';
import {EditCountryComponent} from './components/countries/edit-country/edit-country.component';
import {ViewCountryComponent} from './components/countries/view-country/view-country.component';

const routes: Routes = [
  {path: 'countries', component: ListCountryComponent},
  {path: 'countries/search', component: SearchCountryComponent},
  {path: 'countries/add', component: AddCountryComponent},
  {path: 'countries/edit/:id', component: EditCountryComponent},
  {path: 'countries/view/:id', component: ViewCountryComponent},
  {path: 'home', component: HomeComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
