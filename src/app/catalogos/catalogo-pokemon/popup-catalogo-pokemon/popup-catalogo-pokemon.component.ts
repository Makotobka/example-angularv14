import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-catalogo-pokemon',
  templateUrl: './popup-catalogo-pokemon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupCatalogoPokemonComponent implements OnInit {

  constructor(
    private changeDetecter:ChangeDetectorRef
  ) {

  }

  ngOnInit(): void {
  }

}
