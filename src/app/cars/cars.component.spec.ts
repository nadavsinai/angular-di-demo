import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CarsComponent} from './cars.component';
import {CarsCollection} from '../veichle.types';
import Spy = jasmine.Spy;
import {Car} from './car.class';

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;
  let testCar: Car;
  beforeEach(async(() => {

    testCar = {make: 'test', engine: {type: 'test'}, drive: jasmine.createSpy('drive')};

    TestBed.configureTestingModule({
      providers: [
        {provide: CarsCollection, useValue: [testCar]}
      ],
      declarations: [CarsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponent);
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
