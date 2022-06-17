import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup-catalogo-pokemon',
  templateUrl: './popup-catalogo-pokemon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupCatalogoPokemonComponent implements OnInit {

  public minimo = 1;
  public maximo = 100;
  public itemForm: any;

  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Input() data: any;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.buildItemForm(this.data);
  }

  buildItemForm(data:any) {
    this.itemForm = this.fb.group({
      nombre: [null, Validators.required],
      imagen: [null, Validators.required],
      ataque: [1, Validators.required],
      defensa: [1, Validators.required],
    });
  }

  regresar(){
    this.submit.emit(undefined);
  }

  guardar(){
    this.submit.emit(this.itemForm.getRawValue());
  }
}
