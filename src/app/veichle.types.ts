import {OpaqueToken} from  "@angular/core";


export enum VehicleType {
  Car,
  Bike
}
export enum EngineTypes{
  SimpleEngine,
  BoxerV6Engine,
  SimpleGasEngine
}
export enum DriveStates {
  stationary,
  moving
}
export interface IVehicle {
  state: DriveStates;
  type: VehicleType;
  drive(speed: number): void;
}

export interface IEngine {
  type: EngineTypes;
  fuel: any;
  cylinders: number;
  stop(): boolean;
  start(): Promise<boolean>;
}

export const Bently = new OpaqueToken('Bently');
export const Ford = new OpaqueToken('Ford');
export const CarsCollection = new OpaqueToken('Cars');
export const BentlyMake = 'Bently';
export const FordMake = 'Ford';
