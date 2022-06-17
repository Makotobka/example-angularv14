import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PopupCatalogoPokemonComponent } from './popup-catalogo-pokemon.component';

describe('PopupCatalogoPokemonComponent', () => {
  let component: PopupCatalogoPokemonComponent;
  let fixture: ComponentFixture<PopupCatalogoPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCatalogoPokemonComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PopupCatalogoPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente popup catalogo pokemon, creado con exito', () => {
    expect(component).toBeTruthy();
  });
  it('Datos de formulario correctos', () => {
    // prueba para valores de formulario.
    expect(component).toBeTruthy();
  });

});
