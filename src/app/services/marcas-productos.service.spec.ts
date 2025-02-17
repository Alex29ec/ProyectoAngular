import { TestBed } from '@angular/core/testing';

import { MarcasProductosService } from './marcas-productos.service';

describe('MarcasProductosService', () => {
  let service: MarcasProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarcasProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
