import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatListItemIcon} from '@angular/material/list';
import {MatFormField} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatButton} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { HeaderComponent } from './shared/header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PricePipe } from './shared/pipe/price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AddProductComponent,
    HeaderComponent,
    LoginComponent,
    SignInComponent,
    ProfileComponent,
    PricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatListItemIcon,
    MatFormField,
    ReactiveFormsModule,
    MatButton,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
