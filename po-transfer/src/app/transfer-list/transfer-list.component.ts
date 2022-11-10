import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PoListViewAction } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.css']
})
export class TransferListComponent implements OnInit {

  transactions: any;
  API = environment.API;
  
  constructor(private http: HttpClient) {
    
  }
   
  ngOnInit() {
   this.getTransfer();
  }

  readonly actions: Array<PoListViewAction> = [
    {
      label: 'Detalhes',
      action: this.confirm.bind(this),
      icon: 'po-icon-info'
    },
    {
      label: 'Excluir',
      action: this.delete.bind(this),
      type: 'danger',
      icon: 'po-icon-delete'
    }
  ];

  confirm() {
     
  }

  delete() {
    
  }

  getTransfer() {
    this.http.get(this.API).subscribe((items: any) => {
      this.transactions = items;
    })
  }
}
