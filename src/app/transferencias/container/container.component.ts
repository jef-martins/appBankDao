import { Component, OnInit } from '@angular/core';
import { TransferenciaFacade } from '../transferencia-facade';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {


  constructor(private transferenciaFacade: TransferenciaFacade) { }

  ngOnInit(): void {
  }

  deposito: any


}
