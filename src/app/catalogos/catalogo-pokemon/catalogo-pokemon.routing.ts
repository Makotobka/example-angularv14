import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogoPokemonComponent } from "./catalogo-pokemon.component";

const routes: Routes = [
  {
    path: "",
    component: CatalogoPokemonComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogoPokemonRoutingModule {}
