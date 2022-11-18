import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule, PoDynamicModule, PoListViewModule, PoLoadingModule  } from '@po-ui/ng-components';
import { CriarFilmeComponent } from './components/filmes/criar-filme/criar-filme.component';
import { ListarFilmeComponent } from './components/filmes/listar-filme/listar-filme.component';
import { DeletarFilmeComponent } from './components/filmes/deletar-filme/deletar-filme.component';
import { EditarFilmeComponent } from './components/filmes/editar-filme/editar-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarFilmeComponent,
    ListarFilmeComponent,
    DeletarFilmeComponent,
    EditarFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoDynamicModule,
    PoLoadingModule,
    PoListViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
