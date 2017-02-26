import {IVehicle, VehicleType, IEngine, DriveStates} from '../veichle.types';
export class Car implements IVehicle {
  state: DriveStates;
  type: VehicleType = VehicleType.Car;
  public readonly make: string;

  constructor(public readonly engine: IEngine, make: string) {
    this.state = DriveStates.stationary;
    this.make = make;
  }

  get img() {
    return `assets/cars/${this.make.toLowerCase()}.jpg`;
  }


  drive(speed: number): void {
    this.engine.start().then(() => {
      this.state = DriveStates.moving;
      console.log(`${this.make} driving at ${speed}`);
    });
  }

  stop() {
    this.engine.stop();
    this.state = DriveStates.stationary;
    console.log('stopped ${this.make}');
  }
}
