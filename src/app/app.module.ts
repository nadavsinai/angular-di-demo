import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarsComponent} from './cars/cars.component';
import {BikesComponent} from './bikes/bikes.component';
import {Bently, BentlyMake, Ford, FordMake} from './veichle.types';
import {BoxerV6Engine, ENGINES, SimpleEngine} from './shared/engine.class';
import {CarFactoryService} from './car-factory.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ...ENGINES,
    {provide: FordMake, useValue: 'FORD'},
    {provide: BentlyMake, useValue: 'BENTLY'},
    {
      provide: Bently, useFactory: CarFactoryService.buildCar, deps: [BoxerV6Engine, BentlyMake]
    },
    {
      provide: Ford, useFactory: CarFactoryService.buildCar, deps: [SimpleEngine, FordMake]
    },
  ]

  ,
  bootstrap: [AppComponent]
})
export class AppModule {
}
