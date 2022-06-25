import { TestBed } from '@angular/core/testing';

import { StoredStockListService } from './stored-stock-list.service';

describe('StoredStockListService', () => {
  let service: StoredStockListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoredStockListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
