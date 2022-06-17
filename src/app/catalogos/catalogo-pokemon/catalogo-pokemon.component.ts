import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiCatalogoPokemon, ApiEjemplos } from 'src/app/shared/constantes/rutas-api';
import { CrudService } from 'src/app/shared/servicios/crud/crud.service';

@Component({
  selector: 'app-catalogo-pokemon',
  templateUrl: './catalogo-pokemon.component.html',
  styleUrls: ["../../app.component.less"],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogoPokemonComponent implements OnInit {

  public lsPokemon:any[]=[];
  public selectRow:any;

  constructor(
    private changeDetecter:ChangeDetectorRef,
    private crudServices: CrudService
  ) {

  }

  ngOnInit(): void {
    this.crudServices.consultasGet(ApiCatalogoPokemon.ObtenerListaPokemons).subscribe(res=>{
      //this.lsPokemon = res;
      this.changeDetecter.markForCheck();
    });
  }

  abrirImagen(url:string){
    window.open(url, "_blank");
  }

  submitPopup(value:any){
    this.selectRow = undefined;
    if(value){
      console.log(value)
    }
    this.changeDetecter.markForCheck();
  }

  popupItemPokemon(data?:any){
    this.selectRow = data;
  }

}
