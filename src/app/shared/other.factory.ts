import {EngineTypes, IVehicle} from '../veichle.types';
import {Injectable} from '@angular/core';

@Injectable()
export class OtherFactory {
  static makeBike(make: string): IVehicle {
    return null;
  }
}
