import {Injectable} from '@angular/core';
import {Car} from './cars/car.class';

@Injectable()
export class CarFactoryService {
  static buildCar(engine, model) {
    return new Car(engine, model);
  }

  static buildBike(engine, model) {
    // return new Bike(engine, model);
  }

}
