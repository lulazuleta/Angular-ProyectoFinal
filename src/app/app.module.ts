import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarouselHomeComponent } from './components/carousel-home/carousel-home.component';
import { MoreViewsComponent } from './components/more-views/more-views.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { FilmsComponent } from './films/films.component';
import { SeriesComponent } from './series/series.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselHomeComponent,
    MoreViewsComponent,
    RegisterFormComponent,
    LoginFormComponent,
    FooterComponent,
    CardComponent,
    LoginComponent,
    FilmsComponent,
    SeriesComponent,
    AboutComponent,
    RegisterComponent,
    CartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
