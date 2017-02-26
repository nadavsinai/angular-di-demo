import {Component, Inject, OnInit} from '@angular/core';
import {Car} from './car.class';
import {CarsCollection, EngineTypes} from '../veichle.types';
@Component({
  selector: 'app-cars',
  styles: [`
    .carImage {
      max-width: 200px;
    }
  `],
  template: `
    <div>
      <ul>
        <li class="carItem" *ngFor="let car of cars">{{car.make}}
          <img class="carImage" [src]="car.img"/>
          <span>Engine Type {{EngineTypes[car.engine.type]}}</span>
        </li>
      </ul>
    </div>`,
})
export class CarsComponent implements OnInit {
  public EngineTypes = EngineTypes;

  constructor(@Inject(CarsCollection) private  cars: Car[]) {
  }

  ngOnInit() {
    this.cars.forEach((car: Car) => {
        car.drive(90);
      }
    );
  }

}
