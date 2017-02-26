import {IVehicle, VehicleType, IEngine} from '../veichle.types';
export class Car implements IVehicle {
  type: VehicleType = VehicleType.Car;
  public readonly make: string;

  constructor(public readonly engine: IEngine, make: string) {
    this.make = make;
  }

  get img() {
    return `assets/cars/${this.make.toLowerCase()}.jpg`;
  }


  drive(speed: number): void {
    console.log(`${this.make} driving at ${speed}`)
    this.engine.start();
  }
}
