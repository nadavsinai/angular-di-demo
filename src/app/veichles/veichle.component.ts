import {Component, Input, OnInit} from '@angular/core';
import {DriveStates, EngineTypes, IVehicle} from '../veichle.types';
@Component({
  selector: 'vehicle',
  styles: [`
    .carImage {
      max-width: 200px;
    }
  `],
  template: `
    <div>{{vehicle.make}}
      <img class="carImage" [src]="vehicle.img"/>
      <div *ngIf="vehicle.engine">Engine Type {{EngineTypes[vehicle.engine?.type]}}</div>
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
  public EngineTypes = EngineTypes;
  public DriveStates = DriveStates;

  constructor() {
  }

  ngOnInit() {
  }

}
