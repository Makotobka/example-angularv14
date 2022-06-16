import { TestBed } from '@angular/core/testing';

import { UtilService } from './util.service';

describe('UtilServiceService', () => {
  let service: UtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilService);
  });

  it('Servicio utils iniciado con exito', () => {
    expect(service).toBeTruthy();
  });
});
