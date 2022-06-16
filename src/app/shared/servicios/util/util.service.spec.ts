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

  it('Concatenacion de 1 parametro exitosa', () => {
    const respuestaEsperada = "?idAuthor=1";
    let respuestaServicio = service.concatenarParametrosGet([{nombreParametro: "idAuthor", valor:"1"}]);
    expect(respuestaServicio).toEqual(respuestaEsperada);
  });
  
  it('Concatenacion de varios parametro exitosa', () => {
    const respuestaEsperada = "?idAuthor=1&nombre=juanca&edad=7&ciudad=La mana";
    let respuestaServicio = service.concatenarParametrosGet([
      {nombreParametro: "idAuthor", valor:"1"},
      {nombreParametro: "nombre", valor:"juanca"},
      {nombreParametro: "edad", valor:"7"},
      {nombreParametro: "ciudad", valor:"La mana"},
    ]);
    expect(respuestaServicio).toEqual(respuestaEsperada);
  });
});
