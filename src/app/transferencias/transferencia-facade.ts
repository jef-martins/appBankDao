import { Injectable } from "@angular/core";
import { TransferenciaService } from "./services/transferencias.service";

@Injectable ({
  providedIn: "root"
})

export class TransferenciaFacade {

  constructor (private transferenciaService: TransferenciaService) {

  }

  transferencia(dados:any) {
    this.transferenciaService.depositar(dados)
  }
}
