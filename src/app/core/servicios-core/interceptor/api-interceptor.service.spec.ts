import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/shared/servicios/util/util.service';

import { ApiInterceptorService } from './api-interceptor.service';

describe('ApiInterceptorService', () => {
  let service: ApiInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        ApiInterceptorService,
        UtilService
      ]
    });
    service = TestBed.inject(ApiInterceptorService);
  });

  it('Creación del interceptor', () => {
    expect(service).toBeTruthy();
  });
});
