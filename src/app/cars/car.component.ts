import {Component, Input, OnInit} from '@angular/core';
import {DriveStates, EngineTypes} from '../veichle.types';
import {Car} from './car.class';
@Component({
  selector: 'app-car',
  styles: [`
    .carImage {
      max-width: 200px;
    }
  `],
  template: `
    <div>{{car.make}}
      <img class="carImage" [src]="car.img"/>
      <!--<div>Engine Type {{EngineTypes[car.engine.type]}}</div>-->
      <speed-slider #slider></speed-slider>
      <div [ngSwitch]="car.state">
        <div *ngSwitchCase="DriveStates.stationary">
          'parking'
        </div>
        <div *ngSwitchCase="DriveStates.moving">
          'moving'
        </div>
      </div>
      <button *ngIf="car.state === DriveStates.stationary" (click)="car.drive(slider.speed)">Drive</button>
      <button *ngIf="car.state === DriveStates.moving" (click)="car.stop()">Stop</button>
    </div>`
})
export class CarComponent implements OnInit {
  @Input() car: Car;
  public EngineTypes = EngineTypes;
  public DriveStates = DriveStates;

  constructor() {
  }

  ngOnInit() {
  }

}
