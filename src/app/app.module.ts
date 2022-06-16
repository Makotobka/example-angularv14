import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudService } from './shared/servicios/crud/crud.service';
import { UtilService } from './shared/servicios/util/util.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CrudService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
