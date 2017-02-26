import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { BikesComponent } from './bikes/bikes.component';
import {Car} from "./cars/car.class";

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    BikesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [{provide:Car,useFactory:()=>{}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
