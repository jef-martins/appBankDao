import { Injectable } from "@angular/core";
import { TransferenciaService } from "../../services/transferencias.service";

@Injectable ({
  providedIn: 'root'
})

export class DepositoFacade {

  constructor(private transferenciaService: TransferenciaService){}

  deposito(dados) {
    this.transferenciaService.depositar(dados)

  }

}

