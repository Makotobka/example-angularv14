import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo-pokemon',
  templateUrl: './catalogo-pokemon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogoPokemonComponent implements OnInit {

  public lsPokemon:any[]=[];

  constructor(
    private changeDetecter:ChangeDetectorRef,
  ) {

  }

  ngOnInit(): void {
  }

}
