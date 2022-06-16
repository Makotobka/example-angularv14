import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoPokemonComponent } from './catalogo-pokemon.component';

describe('CatalogoPokemonComponent', () => {
  let component: CatalogoPokemonComponent;
  let fixture: ComponentFixture<CatalogoPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente catalogo pokemon, creado', () => {
    expect(component).toBeTruthy();
  });

});
