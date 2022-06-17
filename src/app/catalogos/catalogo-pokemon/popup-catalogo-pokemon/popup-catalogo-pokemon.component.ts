import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { tipoInputComponent } from 'src/app/shared/constantes/otras-constantes';
import { IPokemon } from 'src/app/shared/interfaces/IPokemon';

@Component({
  selector: 'app-popup-catalogo-pokemon',
  templateUrl: './popup-catalogo-pokemon.component.html',
  styleUrls: ["../../../app.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupCatalogoPokemonComponent implements OnInit {

  public tipoInputConst:any;
  public minimo = 1;
  public maximo = 100;
  public itemForm: any;

  @Output() submitEvent: EventEmitter<any> = new EventEmitter();
  @Input() data: any;
  @Input() isNuevo: boolean=false;

  constructor(
    private fb: FormBuilder
  ) {
    this.tipoInputConst = tipoInputComponent
  }

  ngOnInit(): void {
    this.buildItemForm(this.data);
  }

  buildItemForm(data:IPokemon) {
    this.itemForm = this.fb.group({
      id: [data?.id || null],
      name: [data?.name || null, Validators.required],
      image: [data?.image || null, Validators.required],
      attack: [data?.attack || 1, Validators.required],
      defense: [data?.defense || 1, Validators.required],
      hp:[data?.hp || 1, Validators.required],
      type:[data?.type || null, Validators.required],
      idAuthor:[data?.idAuthor || 1, Validators.required],
    });

  }

  regresar(){
    this.submitEvent.emit(undefined);
  }

  submit(){
    this.submitEvent.emit(this.itemForm.getRawValue());
  }
}
