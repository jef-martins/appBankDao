import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { ChangeDetectionStrategy } from '@angular/core';
import { NbIconConfig } from '@nebular/theme';
import { TransferenciaFacade } from '../../transferencia-facade';

@Component({
  selector: 'app-template-geral',
  templateUrl: './template-geral.component.html',
  styleUrls: ['./template-geral.component.css']
})
export class TemplateGeralComponent{

  deposito: any;



  // constructor(private transferenciaFacade: TransferenciaFacade) { }

  // cadastrar(valores) {
  //   console.log('21');
  //   this.deposito = valores;
  //   this.transferenciaFacade.transferencia(valores);
  // }
}
