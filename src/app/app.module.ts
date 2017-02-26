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
    {provide: Bently, useFactory: CarFactoryService.buildCar, deps: [BoxerV6Engine, BentlyMake]},
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
