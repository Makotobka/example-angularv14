import { Injectable } from '@angular/core';
import { nomenclaturaHTTP } from '../../constantes/constantes-http';
import { listaApiGet } from '../../interfaces/IUtilsApis';

@Injectable({
  providedIn: 'root'
})

/**Servicio general para maneja de funcionalidad pequeñas*/
export class UtilService {
  constructor() {

  }

  /**Metodo utilizado para concatenar parametros get*/
  public concatenarParametrosGet(lista:listaApiGet[], isNotCaracter?:boolean): string{
    let parametros:string = isNotCaracter ? "" : "?";
    for (let index = 0; index < lista.length; index++) {
      let elemento = lista[index];
      parametros += (elemento.nombreParametro + "=" + elemento.valor);
      if(index < (lista.length-1))
        parametros += nomenclaturaHTTP.divisorParametrosGet;
    }
    return parametros;
  }

  /**Metodo para ser usado en el ngfor, mejor rendimiento*/
  trackByFn(item:any) {
    return item.id;
  }
}
