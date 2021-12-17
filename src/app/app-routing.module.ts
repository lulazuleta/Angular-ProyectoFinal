import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cart', component: CartComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
