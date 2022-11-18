import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmeService } from './../filme.service';
import { Component, OnInit } from '@angular/core';
import { Filme } from './../filme';

@Component({
  selector: 'app-editar-filme',
  templateUrl: './editar-filme.component.html',
  styleUrls: ['./editar-filme.component.css']
})
export class EditarFilmeComponent implements OnInit {

  dynamicForm!: NgForm;

  filme: Filme = {
    id:0,
    titulo: '',
    diretor: '',
    genero: '',
    duracao: 0
  }

  Carregando: boolean = true;

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
    items: [{ label: 'Home', link: '/' }, { label: 'Filmes', link: '/listarFilme' }, { label: 'Editar Filme' }]
  };

  propertyForm: Array<PoDynamicFormField> = [
    {
      property: 'titulo',
      label: 'Titulo',
      placeholder: 'Titulo',
      required: true,
      gridColumns: 6,
    },
    {
      property: 'diretor',
      label: 'Diretor',
      placeholder: 'Diretor',
      required: true,
      gridColumns: 6
    },
    {
      property: 'genero',
      label: 'Gênero',
      placeholder: 'Gênero',
      required: true,
      gridColumns: 6
    },
    {
      property: 'duracao',
      label: 'Duração',
      required: true,
      gridColumns: 6,
      type: 'number',
      placeholder: 'Duração',
      maxValue: 600,
      minValue: 1
    }
  ];

  salvar() {
    this.Carregando = false;
    this.service.editar(this.filme).subscribe(() => {
      this.Carregando = true;
      this.router.navigate(['/listarFilme'])
    });
  }

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
