import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VehiclesComponent} from './veichles.component';
import {CarsCollection, DriveStates} from '../veichle.types';
import {Car} from '../shared/car.class';

describe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;
  let testCar: Car;
  beforeEach(async(() => {

    testCar = {state: DriveStates.stationary, make: 'test', engine: {type: 'test'}, drive: jasmine.createSpy('drive')};

    TestBed.configureTestingModule({
      providers: [
        {provide: CarsCollection, useValue: [testCar]}
      ],
      declarations: [VehiclesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call drive', () => {
    expect(testCar.drive).toHaveBeenCalled();
  });
});
