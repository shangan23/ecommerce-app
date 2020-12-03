import { TestBed } from '@angular/core/testing';

import { RouterMiddlewareService } from './router-middleware.service';

describe('RouterMiddlewareService', () => {
  let service: RouterMiddlewareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterMiddlewareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
