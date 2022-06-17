import { NgModule } from "@angular/core";
import { CommonComponentModule } from "src/app/core/common.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CatalogoPokemonComponent } from "./catalogo-pokemon.component";
import { CatalogoPokemonRoutingModule } from "./catalogo-pokemon.routing";
import { PopupCatalogoPokemonComponent } from './popup-catalogo-pokemon/popup-catalogo-pokemon.component';

@NgModule({
  imports: [
    SharedModule,
    CommonComponentModule,
    CatalogoPokemonRoutingModule,
  ],
  declarations: [
    CatalogoPokemonComponent,
    PopupCatalogoPokemonComponent
  ],
})
export class CatalogoPokemonModule {}
