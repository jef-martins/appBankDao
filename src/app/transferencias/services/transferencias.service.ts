import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable ({
  providedIn: "root"
})

export class TransferenciaService{

  constructor (private httpClient: HttpClient) {

  }

  depositar(dados) {
    this.httpClient.post('http://localhost:3000/dados', [dados])
    .subscribe((valor) => {
      console.log(valor)
      console.log('Ok')
    })
  }

  cadastrar(users) {
    this.httpClient.post('http://localhost:3000/users', [users])
    .subscribe((valor) => {
      console.log(valor)
    })
  }

  listar() {
    return this.httpClient.get(`http://localhost:3000/dados/`)
  }

  editar(id:any, users:any) {
    return this.httpClient.put(`http://localhost:3000/users/${id}`, users)
    .subscribe((valor) => {

    })
  }
}
