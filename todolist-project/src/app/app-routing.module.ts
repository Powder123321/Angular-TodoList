import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './FeatureAppToDo/body/home/home.component';
import { BodycoreComponent } from './CoreApp/bodycore/bodycore.component';
import { LoginComponent } from './CoreApp/login/login.component';
import { RegisterComponent } from './CoreApp/register/register.component';
import { SuccesComponent } from './FeatureAppToDo/body/succes/succes.component';

import { NavbarComponent } from './CoreApp/navbar/navbar.component';
import { SidebarcoreComponent } from './CoreApp/sidebarcore/sidebarcore.component';
import { DestinationsComponent } from './FeatureDestinations/destinations/destinations.component';
import { ScheduleComponent } from './CoreApp/Schedule/schedule/schedule.component';

const routes: Routes = [
  { path: '', component: BodycoreComponent },
  { path: 'sidebardcore', component: SidebarcoreComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bodycore', component: BodycoreComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'succes', component: SuccesComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'schedule', component: ScheduleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
