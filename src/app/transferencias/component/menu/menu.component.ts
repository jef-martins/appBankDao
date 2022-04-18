import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  items: NbMenuItem[] = [
    {
      title: 'Extrato',
      icon: 'list-outline',
      link: '/extrato'
      // expanded: false,
      // children: [
      //   {
      //     title: 'Saldo',
      //     link: '/saldo'
      //   },
      //   {
      //     title: 'Extrato',
      //     link: '/extrato',
      //   },
      // ],
    },
    {
      title: 'Saque',
      link: '/sacar',
      icon: 'download-outline'
    },
    {
      title: 'Depósito',
      link: '/depositar',
      icon: 'upload-outline'
    },
    {
      title: 'Cliente',
      link: '/cliente',
      icon: 'person-outline'
    },
  ];

}
