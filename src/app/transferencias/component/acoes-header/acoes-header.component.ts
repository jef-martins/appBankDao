import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { NbIconConfig } from '@nebular/theme';

@Component({
  selector: 'app-acoes-header',
  templateUrl: './acoes-header.component.html',
  styleUrls: ['./acoes-header.component.css']
})
export class AcoesHeaderComponent implements OnInit {

  disabledIconConfig: NbIconConfig = { icon: 'settings-2-outline', pack: 'eva' };


  constructor() { }

  ngOnInit(): void {
  }

}
