import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCountryComponent} from './components/countries/list-country/list-country.component';
import {HomeComponent} from './components/home/home.component';
import {SearchCountryComponent} from './components/countries/search-country/search-country.component';
import {AddCountryComponent} from './components/countries/add-country/add-country.component';
import {EditCountryComponent} from './components/countries/edit-country/edit-country.component';
import {ViewCountryComponent} from './components/countries/view-country/view-country.component';
import {ListProductComponent} from './components/products/list-product/list-product.component';
import {ViewProductComponent} from './components/products/view-product/view-product.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ListClientComponent} from './components/clients/list-client/list-client.component';
import {CaddiesComponent} from './components/caddies/caddies.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {OrderResumeComponent} from './components/order-resume/order-resume.component';
import { ListOrderHeaderComponent } from './components/order-headers/list-order-header/list-order-header.component';
import {ViewOrderHeaderComponent} from './components/order-headers/view-order-header/view-order-header.component';

// TODO : add AuthGuard
const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'login/:origin', component: LoginComponent },
  {path: 'register/:origin', component: RegisterComponent },
  {path: 'countries', component: ListCountryComponent},
  {path: 'countries/search', component: SearchCountryComponent},
  {path: 'countries/add', component: AddCountryComponent},
  {path: 'countries/edit/:id', component: EditCountryComponent},
  {path: 'countries/view/:id', component: ViewCountryComponent},
  {path: 'products', component: ListProductComponent},
  {path: 'products/view/:id', component: ViewProductComponent},
  {path: 'clients', component: ListClientComponent},
  {path: 'orderHeaders', component: ListOrderHeaderComponent},
  {path: 'orderHeaders/view/:id', component: ViewOrderHeaderComponent},
  {path: 'caddies', component: CaddiesComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'orderResume', component: OrderResumeComponent},
  {path: 'home', component: HomeComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
