import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoButtonModule, PoModule, PoStepperModule, PoListViewModule, PoContainerModule, PoLoadingModule, PoWidgetModule, PoGaugeModule, PoPageModule  } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoDynamicModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { TransferListComponent } from './transfer-list/transfer-list.component';
import { TransferaddComponent } from './transferadd/transferadd.component';

@NgModule({
  declarations: [
    AppComponent,
    TransferListComponent,
    TransferaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([
      {
        path: 'transferlist', component: TransferListComponent
      },
      {
        path: 'transferadd', component: TransferaddComponent
      }]),
    PoDynamicModule,
    PoButtonModule,
    HttpClientModule,
    PoStepperModule,
    PoListViewModule,
    PoContainerModule,
    PoLoadingModule,
    PoWidgetModule,
    PoGaugeModule,
    PoPageModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
