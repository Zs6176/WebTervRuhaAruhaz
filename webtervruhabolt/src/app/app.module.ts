import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatListItemIcon} from '@angular/material/list';
import {MatFormField} from '@angular/material/form-field';
import {MatOption, MatSelect, MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatButton} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { HeaderComponent } from './shared/header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PricePipe } from './shared/pipe/price.pipe';
import { AngularFireModule } from '@angular/fire/compat';
import {environment} from '../../environment/environment';
import { IgazHamisPipe } from './shared/pipe/igaz-hamis.pipe';
import { ProfileChangeComponent } from './pages/profile-change/profile-change.component';


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
    PricePipe,
    IgazHamisPipe,
    ProfileChangeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatListItemIcon,
    MatFormField,
    ReactiveFormsModule,
    MatButton,
    MatInputModule,
    MatSelect,
    MatOption
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() => initializeApp({ projectId: "webterv-895be", appId: "1:644930200243:web:619a72d88a7a6593e906c6", storageBucket: "webterv-895be.firebasestorage.app", apiKey: "AIzaSyCRDMMDoigUMNczLzu2RftBc4u1iwjcKmw", authDomain: "webterv-895be.firebaseapp.com", messagingSenderId: "644930200243", measurementId: "G-XLDHB9R02R" })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
