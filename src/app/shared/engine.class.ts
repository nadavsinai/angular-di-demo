import {IEngine} from "../veichle.types";
export class BoxerV6Engine implements IEngine {
  readonly cylinders = 6
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
  readonly cylinders = 4;
  readonly fuel = 'gas';
  isOn: boolean;

  stop(): boolean {
    this.isOn = false;
    return true;
  }

  start(): Promise<boolean> {
    return Promise.resolve(Math.random() > 0.7 ? true:false );
  }
}


export class SimpleGasEngine extends SimpleEngine implements IEngine {
  readonly fuel = 'gas';
}
