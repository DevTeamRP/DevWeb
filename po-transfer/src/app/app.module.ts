import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoButtonModule, PoModule, PoStepperModule, PoListViewModule, PoContainerModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoDynamicModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoDynamicModule,
    PoButtonModule,
    HttpClientModule,
    PoStepperModule,
    PoListViewModule,
    PoContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
