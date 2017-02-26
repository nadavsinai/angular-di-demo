import {Injectable} from '@angular/core';
import {CarFactoryService} from "./car-factory.service";

@Injectable()
export class StoreService {
  cars = [
    this.carFactory.createCar('Lamburginie')
  ];

  constructor(private carFactory: CarFactoryService) {


  }

}
