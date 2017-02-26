import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DriveStates} from '../veichle.types';
import {VehicleComponent} from './veichle.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('VehiclesComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;
  let testCar: any;
  beforeEach(async(() => {

    testCar = {
      state: DriveStates.stationary, make: 'test', drive: jasmine.createSpy('drive')
    };

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [VehicleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
    component.vehicle = testCar;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call drive on click of drive button', () => {
    let button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.detectChanges();
    expect(testCar.drive).toHaveBeenCalled();
  });
});
