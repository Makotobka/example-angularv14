import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tipoInputComponent } from '../../constantes/otras-constantes'

@Component({
  selector: 'app-app-input-data',
  templateUrl: './app-input-data.component.html',
  styleUrls: ["../../../app.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppInputDataComponent implements OnInit {

  public tipoInputConst:any

  @Output() submitEvent: EventEmitter<any> = new EventEmitter();
  @Input("cntrl")
    set poblarcontrol(value: FormControl) { this._control = value; }
    get poblarcontrol() { return this._control; }
  @Input("tpInp") tipoInput: string="";
  @Input("lbl") label: string="";
  @Input("plh") placeholder: string="";
  @Input("min") minimo: number=0;
  @Input("max") maximo: number=0;

  public _control: any;

  constructor() {
    this.tipoInputConst = tipoInputComponent
  }

  ngOnInit(): void {

  }

}

