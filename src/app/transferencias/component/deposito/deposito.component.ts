import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferenciaService } from '../../services/transferencias.service';
import { TransferenciaFacade } from '../../transferencia-facade';
import { DepositoFacade } from './deposito.facade';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css'],
})
export class DepositoComponent implements OnInit {

  selectedItem: any;
  dateTimePicker: any;

  @Output() aoDepositar = new EventEmitter<any>();

  public depositoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private transferenciaFacade: TransferenciaFacade,
    private depositoFacade: DepositoFacade
  ) {}

  // ngOnInit(): void {
  //   const x = document.getElementById('input');
  //   console.log(x);
  // }

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
    // console.log(this.depositoForm.value);
    // this.limparCampos();
  }

  deposito() {
    this.depositoFacade.deposito(this.depositoForm.value)
    // this.transferenciaFacade.transferencia(this.depositoForm.value)
  }

}

// limparCampos() {
//   this.depositoForm = this.fb.group({
//     conta: '',
//     agencia: '',
//     descricao: '',
//     data: '',
//     saldo: '',
//     tipo: '',
//     doc: ''
//   });
// }

//   // };
//   // this.aoDepositar.emit(dadosDeposito);
//   // console.log(dadosDeposito);
// }
