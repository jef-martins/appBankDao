import { ExtratoFacade } from './../extrato.facade';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/transferencias/models/transferencias.models';
import { of } from 'rxjs';


@Component({
  selector: 'app-extrato',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})

export class ExtratoComponent implements OnInit {

  @Input() aoListar: any;



  public transferencia;
  listagem: any;

  constructor(private extratoFacade: ExtratoFacade){}


  ngOnInit() {
    this.lista();
  }

  // listarDados() {
  //   this.transferencia = this.aoListar;
  // }

  lista(){
    const trans =  this.extratoFacade
    .listar()
    .subscribe((cad) => {
      this.transferencia = cad

    })
  }

}

