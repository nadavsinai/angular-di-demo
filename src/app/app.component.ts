import {Component, Injector} from '@angular/core';
import {Bently, CarsCollection, Ford} from './veichle.types';

@Component({
  selector: 'app-root',
  providers: [
    {provide: CarsCollection, multi: true, useExisting: Bently},
    {provide: CarsCollection, multi: true, useExisting: Ford}
  ],
  template: `
    <h1>
      {{title}}
    </h1>
    <app-cars ></app-cars>
  `,
  styles: []
})
export class AppComponent {
  title = 'Vehicles Demos';

  constructor() {

  }


}
