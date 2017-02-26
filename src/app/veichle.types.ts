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
export interface IVehicle {
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
