import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "catalogos",
    //canActivate: [AdminGuard],
    //component: AuthLayoutComponent,
    loadChildren: () =>
      import("./catalogos/catalogo.module").then((m) => m.CatalogoModule),
    data: { title: "Catalogo", module: "Catalogo" },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
