import { Component, OnInit} from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
   readonly menus: Array<PoMenuItem> = [
     { label: 'Inicio', link: '/'},
     { label: 'Extrato', link: '/transferlist' },
     { label: 'Transferencia', link: '/transferadd' }
  ];
  
}
