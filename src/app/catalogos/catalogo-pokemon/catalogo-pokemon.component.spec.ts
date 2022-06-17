import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudService } from 'src/app/shared/servicios/crud/crud.service';

import { CatalogoPokemonComponent } from './catalogo-pokemon.component';

describe('CatalogoPokemonComponent', () => {
  let component: CatalogoPokemonComponent;
  let fixture: ComponentFixture<CatalogoPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
      ],
      providers:[
        CrudService
      ],
      declarations: [ CatalogoPokemonComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogoPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente catalogo pokemon, creado con exito', () => {
    expect(component).toBeTruthy();
  });


});
