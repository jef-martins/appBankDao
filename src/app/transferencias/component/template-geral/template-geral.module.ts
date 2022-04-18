import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SaldoComponent } from 'src/app/transferencias/component/saldo/saldo.component';
import { DepositoComponent } from '../deposito/deposito.component';
import { SaqueComponent } from '../saque/saque.component';
import { TemplateGeralComponent } from './template-geral.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { ClienteComponent } from '../cliente/component/cliente.component';
import { ExtratoComponent } from '../extrato/component/extrato.component';

const routes: Routes = [{
  path:"", component: ExtratoComponent
},
{
  path: 'saldo', component: SaldoComponent
},
{
  path: 'extrato', component: ExtratoComponent
},
{
  path: 'sacar', component: SaqueComponent
},
{
  path: 'depositar', component: DepositoComponent
},
{
  path: 'cliente', component: ClienteComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class TemplateGeralModule { }
