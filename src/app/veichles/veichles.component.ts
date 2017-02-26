import {Component, Inject, Injector, OnInit} from '@angular/core';
import {Car} from '../shared/car.class';
import {CarsCollection, IVehicle} from '../veichle.types';
import {AsyncStoreService} from '../async-store.service';

@Component({
  selector: 'app-cars',
  template: `
    <div>
      <app-car *ngFor="let v of vehicles|async" [vehicle]="v"></app-car>
    </div>`,
})
export class CarsComponent implements OnInit {

  vehicles: Promise<IVehicle[]>;

  constructor(@Inject(CarsCollection) public  predefinedCars: Car[], private asyncStore: AsyncStoreService, private inj: Injector) {
  }

  ngOnInit() {
    this.vehicles = this.asyncStore.getStuff().then((stuff) => {
      const found = stuff.map(something => this.inj.get(something, null)).filter(v => v);
      return this.predefinedCars.concat(found);
    });
  }

}
