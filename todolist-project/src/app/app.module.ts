import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Firebase imports
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environments';

// Components
import { HomeComponent } from './FeatureAppToDo/body/home/home.component';

import { NavbarComponent } from './CoreApp/navbar/navbar.component';
import { LoginComponent } from './CoreApp/login/login.component';
import { RegisterComponent } from './CoreApp/register/register.component';
import { SuccesComponent } from './FeatureAppToDo/body/succes/succes.component';

import { BodycoreComponent } from './CoreApp/bodycore/bodycore.component';
import { SidebarcoreComponent } from './CoreApp/sidebarcore/sidebarcore.component';
import { DestinationsComponent } from './FeatureDestinations/destinations/destinations.component';
import { ScheduleComponent } from './CoreApp/Schedule/schedule/schedule.component';
import { HotelsComponent } from './FeatureHotels/hotels/hotels.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodycoreComponent,

    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    SuccesComponent,

    SidebarcoreComponent,
    DestinationsComponent,
    ScheduleComponent,
    HotelsComponent,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
