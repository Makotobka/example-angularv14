import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "pokemon",
    loadChildren: () =>
      import("./catalogo-pokemon/catalogo-pokemon.module").then((m) => m.CatalogoPokemonModule),
    data: { title: "Pokemon", module: "Pokemon" },
  },
  {
    path: "",
    redirectTo: "pokemon",
    pathMatch: "full",
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogoRoutingModule {}
