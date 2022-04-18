import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferenciaService } from '../../services/transferencias.service';
import { TransferenciaFacade } from '../../transferencia-facade';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  selectedItem: any;
  dateTimePicker: any;

  @Output() aoDepositar = new EventEmitter<any>();

  public depositoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private transferenciaFacade: TransferenciaFacade
  ) {}
  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm() {
    this.depositoForm = this.fb.group({
      conta: ['', [Validators.required]],
      agencia: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      data: ['', [Validators.required]],
      saldo: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      doc: ['', [Validators.required]],
    });
    console.log(this.depositoForm.value);
    this.limparCampos();
  }

  deposito() {
    this.transferenciaFacade.transferencia(this.depositoForm.value)
  }
  limparCampos() {
      this.fb.group({
        conta: '',
        agencia: '',
        descricao: '',
        data: '',
        saldo: '',
        tipo: '',
        doc: ''
      });
    }

}
