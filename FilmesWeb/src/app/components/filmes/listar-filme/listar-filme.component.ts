import { Router } from '@angular/router';
import { FilmeService } from './../filme.service';
import { Filme } from './../filme';
import { Component, OnInit } from '@angular/core';
import { PoListViewAction, PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'app-listar-filme',
  templateUrl: './listar-filme.component.html',
  styleUrls: ['./listar-filme.component.css']
})
export class ListarFilmeComponent implements OnInit {
  filmes: Array<Filme> = [];

  constructor(
    private service: FilmeService,
    private router: Router) {
  }

  ngOnInit() {
   this.getTransfer();
  }

  readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Filmes' }]
  };

  readonly actions: Array<PoListViewAction> = [
    {
      label: 'Editar',
      action: this.editar.bind(this),
      icon: 'po-icon-info'
    },
    {
      label: 'Excluir',
      action: this.delete.bind(this),
      type: 'danger',
      icon: 'po-icon-delete'
    }
  ];

  editar(filme: Filme) {
    this.router.navigate([`/filmes/editarFilme/${filme.id}`]);
  }

  delete(filme: Filme) {
    this.router.navigate([`/filmes/deletarFilme/${filme.id}`]);
  }

  formatTitle(item: Filme) {
    return `${item.id} - ${item.titulo}`;
  }

  getTransfer() {
    this.service.listar().subscribe((filmes: Array<Filme>) => {
      this.filmes = filmes;
    })
  }

}
