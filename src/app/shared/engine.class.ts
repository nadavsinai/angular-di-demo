import {EngineTypes, IEngine} from '../veichle.types';

export class BoxerV6Engine implements IEngine {
  type = EngineTypes.BoxerV6Engine;
  readonly cylinders = 6;
  readonly fuel = 'petrol';
  isOn: boolean;

  stop(): boolean {
    this.isOn = false;
    return true;
  }

  start(): Promise<boolean> {
    return Promise.resolve(true);
  }
}


export class SimpleEngine implements IEngine {
  type = EngineTypes.SimpleEngine;
  readonly cylinders = 4;
  readonly fuel = 'gas';
  isOn: boolean;

  stop(): boolean {
    this.isOn = false;
    return true;
  }

  start(): Promise<boolean> {
    return Promise.resolve(Math.random() > 0.7 ? true : false);
  }
}


export class SimpleGasEngine extends SimpleEngine implements IEngine {
  type = EngineTypes.SimpleGasEngine;
  readonly fuel = 'gas';
}
export const ENGINES = [SimpleEngine, SimpleGasEngine, BoxerV6Engine];
