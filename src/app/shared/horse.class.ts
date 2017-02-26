import {DriveStates, IVehicle, VehicleType} from '../veichle.types';
export class Horse implements IVehicle {
  make: string = 'Nature';
  state = DriveStates.stationary;
  type = VehicleType.Animal;

  get img() {
    return `/assets/cars/horse.jpg`;
  }

  drive(speed: number): void {
  }

  stop(): void {
  }

}
