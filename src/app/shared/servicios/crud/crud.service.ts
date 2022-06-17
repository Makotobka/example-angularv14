import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable()

/**Servicio para manejo de peticiones http*/
export class CrudService {

  private httpOpciones = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private httpClient: HttpClient) { }

  /**Consulta http get*/
  consultasGet(url:string): Observable<any>{
    return this.httpClient.get(environment.servicioURL+url, this.httpOpciones)
  }

  /**Consulta http post*/
  consultasPost(url:string, data:any): Observable<any>{
    let body = JSON.stringify(data);
    return this.httpClient.post(url,body, this.httpOpciones);
  }

  /**insertar nuevo registro http post*/
  insertar(url:string, data:any): Observable<any>{
    let body = JSON.stringify(data);
    return this.httpClient.post(url,body, this.httpOpciones);
  }

  /**actualizar registors http put*/
  actualizar(url:string, data:any): Observable<any>{
    let body = JSON.stringify(data);
    return this.httpClient.put(url,body, this.httpOpciones);
  }

  /**eliminar registro http put*/
  eliminar(url:string): Observable<any>{
    return this.httpClient.delete(url, this.httpOpciones)
  }
}
