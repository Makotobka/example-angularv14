import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routesPrincipales: Routes = [
  {
    path: "catalogos",
    //canActivate: [AdminGuard],
    //component: AuthLayoutComponent,
    loadChildren: () =>
      import("./catalogos/catalogo.module").then((m) => m.CatalogoModule),
    data: { title: "Catalogo", module: "Catalogo" },
  },
  {
    path: "",
    redirectTo: "catalogos/pokemon",
    pathMatch: "full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routesPrincipales)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
