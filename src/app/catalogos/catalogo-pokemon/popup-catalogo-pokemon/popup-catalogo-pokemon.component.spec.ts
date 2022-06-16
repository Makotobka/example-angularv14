import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCatalogoPokemonComponent } from './popup-catalogo-pokemon.component';

describe('PopupCatalogoPokemonComponent', () => {
  let component: PopupCatalogoPokemonComponent;
  let fixture: ComponentFixture<PopupCatalogoPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCatalogoPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupCatalogoPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente popup catalogo pokemon, creado', () => {
    expect(component).toBeTruthy();
  });
});
