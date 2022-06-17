import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiCatalogoPokemon } from 'src/app/shared/constantes/rutas-api';
import { IPokemon } from 'src/app/shared/interfaces/IPokemon';
import { CrudService } from 'src/app/shared/servicios/crud/crud.service';
import { UtilService } from 'src/app/shared/servicios/util/util.service';

@Component({
  selector: 'app-catalogo-pokemon',
  templateUrl: './catalogo-pokemon.component.html',
  styleUrls: ["../../app.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogoPokemonComponent implements OnInit {

  public lsPokemon:IPokemon[]=[];
  public lsPokemonBackup:IPokemon[]=[];
  public selectRow:any;
  public isPopup:boolean = false;
  public itemForm: any;

  constructor(
    private changeDetecter:ChangeDetectorRef,
    private crudServices: CrudService,
    private fb: FormBuilder,
    public util:UtilService
  ) {

  }

  ngOnInit(): void {
    this.buildItemForm();
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.crudServices.consultasGet(ApiCatalogoPokemon.obtenerListaPokemons).subscribe((res:IPokemon[])=>{
      this.lsPokemon = res;
      this.lsPokemonBackup = res;
      this.changeDetecter.markForCheck();
    });
  }

  buildItemForm() {
    this.itemForm = this.fb.group({
      filtro: [null],
    });
    this.registerEvent();
  }

  registerEvent(){
    this.itemForm.controls["filtro"].valueChanges.subscribe((value:string)=>{
      this.lsPokemon = this.lsPokemonBackup.filter(x=>
        x.name?.toLocaleLowerCase().includes(value?.toLocaleLowerCase())
      );
      this.changeDetecter.markForCheck();
    });
  }

  popupItemPokemon(row:IPokemon){
    this.selectRow = row;
    this.isPopup = true
    this.changeDetecter.markForCheck();
  }

  eliminarPokemon(row:IPokemon){
    let parametros = this.util.concatenarParametrosGet([{nombreParametro:"id", valor: row?.id}])
    this.crudServices.eliminar(ApiCatalogoPokemon.eliminar+parametros).subscribe((res:IPokemon[])=>{
      this.obtenerDatos();
    });
  }

  nuevoRegistro(){
    this.selectRow = {};
    this.isPopup = true
    this.changeDetecter.markForCheck();
  }

  abrirImagen(url:string){
    window.open(url, "_blank");
  }

  submitPopup(value:IPokemon){
    if(value !== undefined){
      if(this.selectRow.id === undefined){
        this.crudServices.insertar(ApiCatalogoPokemon.crearRegistro,value).subscribe((res:any)=>{
          this.obtenerDatos();
        });
      }else{
        let parametros = this.util.concatenarParametrosGet([{nombreParametro:"id", valor: value?.id}])
        this.crudServices.actualizar(ApiCatalogoPokemon.actualizar+parametros,value).subscribe((res:any)=>{
          this.obtenerDatos();
        });
      }
    }
    this.selectRow = undefined;
    this.isPopup = false
  }
}
