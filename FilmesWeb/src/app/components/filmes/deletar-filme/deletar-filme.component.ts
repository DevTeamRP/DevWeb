import { ActivatedRoute, Router } from '@angular/router';
import { FilmeService } from './../filme.service';
import { Filme } from './../filme';
import { PoBreadcrumb, PoDynamicViewField } from '@po-ui/ng-components';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletar-filme',
  templateUrl: './deletar-filme.component.html',
  styleUrls: ['./deletar-filme.component.css']
})
export class DeletarFilmeComponent implements OnInit {
   filme: Filme = {
    id: 0,
    titulo: '',
    diretor: '',
    genero: '',
    duracao: 0
   };

  Carregando: boolean = true;

  Danger: boolean = true;

  constructor(
    private service: FilmeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((filme) => {
      this.filme = filme;
    })
  }

  readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Filmes', link: '/listarFilme' }, { label: 'Deletar' }]
  };

  fields: Array<PoDynamicViewField> = [
    { property: 'titulo', divider: 'Filme', gridColumns: 6, order: 1 },
    { property: 'diretor', label: 'Diretor', gridColumns:6 },
    { property: 'genero', label: 'Genero', gridColumns: 6 },
    { property: 'duracao', label: 'Duração', gridColumns: 6 },
  ];



  deletar() {
    if (this.filme.id) {
        this.Carregando = false;
        this.service.excluir(this.filme.id).subscribe(() => {
          this.Carregando = true;
          this.router.navigate(['/listarFilme']);
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarFilme']);
  }
}
