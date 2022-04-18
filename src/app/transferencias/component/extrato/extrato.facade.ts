import { Injectable } from "@angular/core";
import { TransferenciaService } from "../../services/transferencias.service";

@Injectable ({
  providedIn: 'root'
})

export class ExtratoFacade {

  constructor(private transferenciaService: TransferenciaService ){}

  listar() {
    return this.transferenciaService.listar()
  }

}
