export enum VehicleType {
  Car,
  Bike
}

export interface IVehicle {
  type:VehicleType
  drive(speed:number):void
}

export interface IEngine {
  fuel:any;
  cylinders:number
  stop():boolean
  start():Promise<boolean>
}

export interface IGears{
  number:number;
}
