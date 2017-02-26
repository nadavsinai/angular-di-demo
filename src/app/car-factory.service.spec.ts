import { TestBed, inject } from '@angular/core/testing';
import { CarFactoryService } from './car-factory.service';

describe('CarFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarFactoryService]
    });
  });

  it('should ...', inject([CarFactoryService], (service: CarFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
