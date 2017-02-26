import {Injectable, Injector} from '@angular/core';
import {Car} from "./cars/car.class";

@Injectable()
export class CarFactoryService {

  constructor(private inj:Injector) { }

  createCar(model){
    return this.inj.get(Car)(model);
  }

}
