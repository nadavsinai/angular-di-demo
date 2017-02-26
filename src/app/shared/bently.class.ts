import {Inject, Injectable} from '@angular/core';
import {BoxerV6Engine} from './engine.class';
import {Car} from './car.class';
import {BentlyMake} from '../veichle.types';

@Injectable()
export class BentlyClass extends Car {
  constructor(public engine: BoxerV6Engine, @Inject(BentlyMake) public make: string) {
    super(engine, make);
  }
}
