import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteFacade } from '../cliente.facade';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  login: any;
  senha: any;
  users: any;
  nome_usuario: any;

  @Output() aoCadastrar = new EventEmitter<any>();
  @Output() aoAtualizar = new EventEmitter<any>();
  @Output() atualizarDados = new EventEmitter<any>()


  public clienteForm: FormGroup;
  transferencia: any;

  constructor(private fb: FormBuilder, private clienteFacade: ClienteFacade) {}

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm() {
    this.clienteForm = this.fb.group({
      login: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      nome_usuario: ['', [Validators.required]]
    });
  }

  cadastro() {
    this.clienteFacade.cadastro(this.clienteForm.value);
  }


  atualizar(users: any){
    this.transferencia = users;
    this.atualizarDados.emit(users)
    this.clienteFacade.atualizar(users)
  }

}
