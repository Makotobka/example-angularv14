import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CodigosHTTP } from 'src/app/shared/constantes/constantes-http';
import { UtilService } from '../../../shared/servicios/util/util.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  private token:string = "";
  private autenticacionGet:string = "idAuthor=1";

  constructor(private util:UtilService) { 

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("sadsa")
    if(this.autenticacionGet){
      /*
      req = req.clone(
        {
          setHeaders:{

          }
        }
      )
      */
    }
    return next.handle(req)
            .pipe( 
              catchError(this.interceptarError.bind(this) //Interceptor de error en el pipe de recepcion.
            ));
  }

  public interceptarError(errorApi: any){
    if (errorApi instanceof HttpErrorResponse) {
      switch (errorApi.status) {
        case CodigosHTTP.UNAUTHORIZED_CODE:
          console.log("Peticion no autorizada")
        break;
        case CodigosHTTP.ERROR_CODDE:
          console.log("Error en el servidor")
        break;
        case CodigosHTTP.GATEWAY:
          console.log("Tiempo de espera agotado para la peticion")
        break;
        case CodigosHTTP.BAD_REQUEST:
          console.log("Bad request")
          break;
        case CodigosHTTP.NOT_FOUND:
          console.log("Api no encontrada")
          break;
        case CodigosHTTP.NOT_CONECTION:
          console.log("No conectado, sin datos.")
          break;
        default:
        break;
      }
    }
    return throwError(errorApi);
  }
}
