import {Car} from './shared/car.class';

export class CarFactoryService {
  static buildCar(engine, model) {
    return new Car(engine, model);
  }


}
