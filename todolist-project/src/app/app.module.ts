import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './body/home/home.component';
import { AboutComponent } from './body/about/about.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar/navbar.component';
import { LoginComponent } from './header/login/login.component';
import { RegisterComponent } from './header/register/register.component';
import { SuccesComponent } from './body/succes/succes.component';
import { ReviewsComponent } from './header/reviews/reviews.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    SuccesComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'angular-list-system',
        appId: '1:263424808695:web:2d32ee1faec539bf1f65f2',
        storageBucket: 'angular-list-system.appspot.com',
        apiKey: 'AIzaSyBRTabBG6lCG-slOBv1K3dhRkUfRf5Z4AY',
        authDomain: 'angular-list-system.firebaseapp.com',
        messagingSenderId: '263424808695',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
