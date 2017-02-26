import {Component, Inject, OnInit} from '@angular/core';
import {Car} from './car.class';
import {CarsCollection} from '../veichle.types';

@Component({
  selector: 'app-cars',
  template: `
    <div>
      <app-car class="carItem" *ngFor="let car of cars" [car]="car"></app-car>
    </div>`,
})
export class CarsComponent implements OnInit {
  constructor(@Inject(CarsCollection) public  cars: Car[]) {
  }

  ngOnInit() {
  }

}
