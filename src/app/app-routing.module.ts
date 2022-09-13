import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyCarComponent} from "./my-car/pages/my-car/my-car.component";
import {MyFavouritesComponent} from "./my-favourites/pages/my-favourites/my-favourites.component";
import {MyRentalsComponent} from "./my-rentals/pages/my-rentals/my-rentals.component";
import {MyReservationsComponent} from "./my-reservations/pages/my-reservations/my-reservations.component";
import {SearchCarComponent} from "./search-car/pages/search-car/search-car.component";
import {SubscriptionComponent} from "./subscription/pages/subscription/subscription.component";
import {ClientNavigationComponent} from "./client-navigation/client-navigation.component";
import {CarComponent} from "./car/pages/car/car.component";
import {MyProfileComponent} from "./my-profile/pages/my-profile/my-profile.component";
import {HomeComponent} from "./freeviews/pages/home/home.component";
import {AboutComponent} from "./freeviews/pages/about/about.component";
import {LoginComponent} from "./freeviews/pages/login/login.component";
import {RegisterComponent} from "./freeviews/pages/register/register.component";
import {FreeviewComponent} from "./freeviews/pages/freeview/freeview.component";

const routes: Routes = [
  {
    path: '',
    component: FreeviewComponent,
    children: [
      {path: '',  component: HomeComponent},
      {path: 'about',  component: AboutComponent},
      {path: 'login',  component: LoginComponent},
      {path: 'register',  component: RegisterComponent},
    ]
  },
  {
    path: 'client',
    component: ClientNavigationComponent,
    children: [
      {path: 'search', component: SearchCarComponent},
      {path: 'my-car',  component: MyCarComponent},
      {path: 'favourites', component: MyFavouritesComponent},
      {path: 'rentals', component: MyRentalsComponent},
      {path: 'reservations', component: MyReservationsComponent},
      {path: 'subscription', component: SubscriptionComponent},
      {path: 'profile', component: MyProfileComponent},
      {path: 'search/car/:carId', component: CarComponent},
      {path: 'profile/car/:carId', component: CarComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
