import { Injectable } from "@angular/core";
import { TransferenciaService } from "../../services/transferencias.service";

@Injectable ({
  providedIn: 'root'
})

export class ClienteFacade {

  constructor(private transferenciaService: TransferenciaService){}

  cadastro(users) {
    this.transferenciaService.cadastrar(users)

  }

  atualizar(users: any){
    console.log("oy")
    this.transferenciaService.editar(users.id, users)
  }


}
