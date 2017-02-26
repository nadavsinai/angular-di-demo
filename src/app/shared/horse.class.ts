import {DriveStates, IVehicle, VehicleType} from '../veichle.types';
export class Horse implements IVehicle {
  make: string = 'Nature';
  state = DriveStates.stationary;
  type = VehicleType.Animal;
  maxSpeed = 50;

  get img() {
    return `/assets/cars/horse.jpg`;
  }

  drive(speed: number): void {
    this.state = DriveStates.moving;
    console.log('horse is trotting at ${speed} kmh');
  }

  stop(): void {
    this.state = DriveStates.stationary;
  }

}
