import { TestBed } from '@angular/core/testing';

import { OrderHeaderService } from './order-header.service';

describe('OrderHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderHeaderService = TestBed.get(OrderHeaderService);
    expect(service).toBeTruthy();
  });
});
