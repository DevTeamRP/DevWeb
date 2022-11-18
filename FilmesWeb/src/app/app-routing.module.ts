import { EditarFilmeComponent } from './components/filmes/editar-filme/editar-filme.component';
import { DeletarFilmeComponent } from './components/filmes/deletar-filme/deletar-filme.component';
import { ListarFilmeComponent } from './components/filmes/listar-filme/listar-filme.component';
import { CriarFilmeComponent } from './components/filmes/criar-filme/criar-filme.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'criarFilme',
    component:CriarFilmeComponent
  },
  {
    path: 'listarFilme',
    component:ListarFilmeComponent
  },
  {
    path: 'filmes/deletarFilme/:id',
    component:DeletarFilmeComponent
  },
   {
    path: 'filmes/editarFilme/:id',
    component:EditarFilmeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
