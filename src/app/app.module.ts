import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiInterceptorService } from './core/servicios-core/interceptor/api-interceptor.service';
import { ServiciosCoreModule } from './core/servicios-core/servicios-core.module';
import { CrudService } from './shared/servicios/crud/crud.service';
import { UtilService } from './shared/servicios/util/util.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiciosCoreModule
  ],
  providers: [
    CrudService,
    UtilService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
