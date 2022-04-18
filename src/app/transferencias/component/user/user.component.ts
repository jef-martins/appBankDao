import { Component, Inject, OnInit } from '@angular/core';
import { NB_WINDOW, NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public nome = 'Eduardo'
  public login = 'eduardo'

  items = [
    {
      title:  'Logout',
      icon: 'log-out-outline'
    },
  ];

  constructor(private nbMenuService: NbMenuService, @Inject(NB_WINDOW) private window) {
  }
  ngOnInit() {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'menu usuario'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => this.window.alert(`${title} foi clicado`));
  }


}
