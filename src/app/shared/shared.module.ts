import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ServiciosCoreModule } from "../core/servicios-core/servicios-core.module";
import { CrudService } from "./servicios/crud/crud.service";
import { UtilService } from "./servicios/util/util.service";
import { AppInputDataComponent } from './componentes/app-input-data/app-input-data.component';
import { CommonComponentModule } from "../core/common.module";

@NgModule({
  imports:[
    HttpClientModule,
    ServiciosCoreModule,
    CommonComponentModule
  ],
  providers: [
    CrudService,
    UtilService
  ],
  declarations: [
    AppInputDataComponent,
  ],
  exports:[
    AppInputDataComponent
  ]
})

export class SharedModule {}
