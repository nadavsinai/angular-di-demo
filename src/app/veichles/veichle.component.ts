import {Component, Input, OnInit} from '@angular/core';
import {DriveStates, EngineTypes, IVehicle} from '../veichle.types';
import {Car} from '../shared/car.class';
@Component({
  selector: 'app-car',
  styles: [`
    .carImage {
      max-width: 200px;
    }
  `],
  template: `
    <div>{{vehicle.make}}
      <img class="carImage" [src]="vehicle.img"/>
      <!--<div>Engine Type {{EngineTypes[car.engine.type]}}</div>-->
      <speed-slider #slider></speed-slider>
      <div [ngSwitch]="vehicle.state">
        <div *ngSwitchCase="DriveStates.stationary">
          'parking'
        </div>
        <div *ngSwitchCase="DriveStates.moving">
          'moving'
        </div>
      </div>
      <button *ngIf="vehicle.state === DriveStates.stationary" (click)="vehicle.drive(slider.speed)">Drive</button>
      <button *ngIf="vehicle.state === DriveStates.moving" (click)="vehicle.stop()">Stop</button>
    </div>`
})
export class CarComponent implements OnInit {
  @Input() vehicle: IVehicle;
  public EngineTypes = EngineTypes;
  public DriveStates = DriveStates;

  constructor() {
  }

  ngOnInit() {
  }

}
