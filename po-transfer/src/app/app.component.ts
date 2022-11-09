import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoDynamicFormField, PoListViewAction, PoMenuItem, PoStepComponent, PoStepperComponent } from '@po-ui/ng-components';
import { PoDynamicField } from '@po-ui/ng-components/lib/components/po-dynamic/po-dynamic-field.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('stepper') stepper!: PoStepperComponent;
  dynamicForm!: NgForm;
  raw!: any;
  API = environment.API;
  transactionConfirm: any = [];

  propertyData: boolean = true;
  propertyAccept: boolean = true;
  propertyConcluded: boolean = true;
  constructor(private http: HttpClient) {
    
  }
  readonly menus: Array<PoMenuItem> = [
    { label: 'Inicio', action: () => alert('Hello world') }
  ];

  readonly actions: Array<PoListViewAction> = [
    {
      label: 'Hire',
      action: this.confirm.bind(this),
      icon: 'po-icon-ok'
    },
    {
      label: 'Cancel',
      action: this.cancel.bind(this),
      type: 'danger',
      icon: 'po-icon-close'
    }
  ];
 
  propertyForm: Array<PoDynamicFormField> = [
    {
      property: 'sender',
      label: 'Remetente',
      placeholder: 'Remetente',
      required: true,
      gridColumns: 4
    },
    {
      property: 'recipient',
      label: 'Destinatário',
      placeholder: 'Destinatário',
      required: true,
      gridColumns: 4
    },
    {
      property: 'money',
      label: 'Valor',
      type: 'currency',
      placeholder: 'Valor',
      required: true,
      gridColumns: 4
    },
    {
      property: 'description',
      label: 'Descrição',
      required: true,
      gridColumns: 12,
      rows: 5,
      placeholder: 'Descrição'
    }
  ];

  save() {
    this.raw = this.dynamicForm.form.getRawValue();
    this.raw = {
      ...this.raw,
      date: new Date().toISOString()
    }
    this.http.post(this.API, this.raw).subscribe((response) => {
      this.transactionConfirm.push(response);
      this.dynamicForm.reset();
      this.stepper.next();
    })
  }

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

  poData() {
    return this.propertyData;
  }

  poAccept() {
    return this.propertyData;
  }

  poConcluded() {
    return this.propertyData;
  }

  confirm() {
    this.stepper.next();
    this.dynamicForm.reset();
  }

  cancel() {
    this.stepper.first();
  }
}
