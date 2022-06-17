import { NgModule } from "@angular/core";
import { CommonComponentModule } from "src/app/core/common.module";
import { activarInterceptor } from "src/app/core/servicios-core/interceptor/interceptor-api.service";
import { ServiciosCoreModule } from "src/app/core/servicios-core/servicios-core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CatalogoPokemonComponent } from "./catalogo-pokemon.component";
import { CatalogoPokemonRoutingModule } from "./catalogo-pokemon.routing";
import { PopupCatalogoPokemonComponent } from './popup-catalogo-pokemon/popup-catalogo-pokemon.component';

@NgModule({
  imports: [
    SharedModule,
    CommonComponentModule,
    CatalogoPokemonRoutingModule,
    ServiciosCoreModule,
  ],
  declarations: [
    CatalogoPokemonComponent,
    PopupCatalogoPokemonComponent
  ],
  providers:[
    activarInterceptor
  ]
})
export class CatalogoPokemonModule {}
