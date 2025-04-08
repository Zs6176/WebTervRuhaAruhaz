import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {ProductComponent} from './pages/product/product.component';
import {AddProductComponent} from './pages/add-product/add-product.component';
import {LoginComponent} from './pages/login/login.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {ProfileComponent} from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'addproduct', component: AddProductComponent },
  { path: 'product/:productId', component: ProductComponent},
  { path: 'login', component: LoginComponent },
  { path: 'SignIn', component: SignInComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
