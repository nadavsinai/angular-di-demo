import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {VehiclesComponent} from './veichles/veichles.component';
import {Bently, BentlyMake, Ford, FordMake} from './veichle.types';
import {BoxerV6Engine, ENGINES, SimpleEngine} from './shared/engine.class';
import {CarFactoryService} from './car-factory.service';
import {SpeedSliderComponent} from './shared/speed-slider.component';
import {VehicleComponent} from './veichles/veichle.component';
import {AsyncStoreService} from './async-store.service';
import {OtherFactory} from './shared/other.factory';
import {Horse} from './shared/horse.class';
import {BentlyClass} from './shared/bently.class';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    SpeedSliderComponent,
    VehicleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ...ENGINES,
    {provide: FordMake, useValue: 'FORD'},
    {provide: BentlyMake, useValue: 'BENTLY'},
    {provide: Bently, useClass: BentlyClass},
    {provide: Ford, useFactory: CarFactoryService.buildCar, deps: [SimpleEngine, FordMake]},
    AsyncStoreService,
    OtherFactory,
    {provide: 'Horse', useClass: Horse}
  ]

  ,
  bootstrap: [AppComponent]
})
export class AppModule {
}
