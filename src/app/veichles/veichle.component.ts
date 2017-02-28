import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DriveStates, EngineTypes, IVehicle} from '../veichle.types';
@Component({
  selector: 'vehicle',
  styles: [`
    .selected {
      font-weight: bold;
    }
    .carImage {
      max-width: 200px;
    }
  `],
  template: `
    <div (click)="clicked.emit($event)" [class.selected]="selected">{{vehicle.make}}
      <img class="carImage" [src]="vehicle.img"/>
      <div *ngIf="vehicle.engine">Engine Type {{EngineTypes[vehicle.engine.type]}}</div>
      <speed-slider #slider [max]="vehicle.maxSpeed"></speed-slider>
      <div [ngSwitch]="vehicle.state">
        <div *ngSwitchCase="DriveStates.stationary">
          'stationary'
        </div>
        <div *ngSwitchCase="DriveStates.moving">
          'moving'
        </div>
      </div>
      <button *ngIf="vehicle.state === DriveStates.stationary" (click)="vehicle.drive(slider.speed)">Drive</button>
      <button *ngIf="vehicle.state === DriveStates.moving" (click)="vehicle.stop()">Stop</button>
    </div>`
})
export class VehicleComponent implements OnInit {
  @Input() vehicle: IVehicle;
  @Input() selected:boolean;
  @Output() clicked = new EventEmitter()
  public EngineTypes = EngineTypes;
  public DriveStates = DriveStates;

  constructor() {
  }

  ngOnInit() {
  }

}
