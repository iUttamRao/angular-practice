import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'profile',
    component : ProfileComponent
  },
  {
    path: 'calculator',
    component : CalculatorComponent
  },
  {
    path: 'profile',
    component : ProfileComponent
  },
  {
    path: 'ecommerce',
    component : EcommerceComponent
  },
  {
    path: 'ecommerce/product/:id',
    component : ProductDetailsComponent
  },
  {
    path: 'form',
    component : FormComponent
  },
];
