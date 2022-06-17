import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CodigosHTTP } from 'src/app/shared/constantes/constantes-http';
import { UtilService } from 'src/app/shared/servicios/util/util.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorApiService implements HttpInterceptor {

  constructor(private util:UtilService) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let parteValidacion = req.url.includes("?") ? "&" : "?";
    parteValidacion += this.util.concatenarParametrosGet([{nombreParametro:"idAuthor",valor:"1"}], true);
      req = req.clone({
        url: req.url + parteValidacion
      });

    return next.handle(req).pipe(
              catchError(this.interceptarError.bind(this) //Interceptor de error en el pipe de recepcion.
           ));
  }

  private interceptarError(errorApi: any): Observable<HttpEvent<any>> {
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

export const activarInterceptor= {
  provide: HTTP_INTERCEPTORS,
  useClass: InterceptorApiService,
  multi: true,
}
