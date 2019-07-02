import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCountryComponent} from './country/list-country/list-country.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'countries', component: ListCountryComponent},
  {path: 'home', component: HomeComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
