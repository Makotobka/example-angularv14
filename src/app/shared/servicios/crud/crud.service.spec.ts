import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { ApiEjemplos } from '../../constantes/rutas-api';

import { CrudService } from './crud.service';

describe('CrudService', () => {
  let service: CrudService;
  let httpSpy: {get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy};
  beforeEach(() => {
    httpSpy = jasmine.createSpyObj("HttpClient", ["get","post","put","delete"]);
    service = new CrudService(httpSpy as any);
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
      ],
      providers:[
        CrudService
      ]
    });
    //service = TestBed.inject(CrudService);
  });

  it('Servicio crud iniciado con exito', () => {
    expect(service).toBeTruthy();
  });

  it('Obtener datos apis', (done: DoneFn)=>{
    const datosEntrada = {
      id:"xx",
      sd:"ss"
    }
    const obtenerLista = [
      {dt:"asdsa", dt2:"xzcxzczxc"}
    ]
    httpSpy.get.and.returnValue(of(obtenerLista));
    //httpSpy.post.and.returnValue(of(obtenerLista));
    //httpSpy.put.and.returnValue(of(obtenerLista));
    //httpSpy.delete.and.returnValue(of(obtenerLista));

    service.consultasGet(ApiEjemplos.othe).subscribe((value)=>{
      let max = value.length;

      done();
    })


  });
});
