import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CrudService } from "./servicios/crud/crud.service";
import { UtilService } from "./servicios/util/util.service";

@NgModule({
  imports:[
    HttpClientModule,
  ],
  providers: [
    CrudService,
    UtilService
  ]
})

export class SharedModule {}
