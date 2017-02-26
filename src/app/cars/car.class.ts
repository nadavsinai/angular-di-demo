import {IVehicle, VehicleType, IEngine} from "../veichle.types";
export class Car implements IVehicle {
  type: VehicleType = VehicleType.Car;

  constructor(private engine: IEngine, make: string) {
  }


  drive(speed: number): void {
    this.engine.start()
  }
}
