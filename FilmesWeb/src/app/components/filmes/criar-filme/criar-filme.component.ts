import { FilmeService } from './../filme.service';
import { Filme } from './../filme';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoDynamicFormField, PoBreadcrumb } from '@po-ui/ng-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-filme',
  templateUrl: './criar-filme.component.html',
  styleUrls: ['./criar-filme.component.css']
})
export class CriarFilmeComponent implements OnInit {
  dynamicForm!: NgForm;

  filme: Filme = {
    titulo: '',
    diretor: '',
    genero: '',
    duracao: 0
  }

  Carregando: boolean = true;

  constructor(
    private service: FilmeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Filmes', link: '/listarFilme' }, { label: 'Adicionar Filme' }]
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
    this.service.criar(this.filme).subscribe(() => {
      this.Carregando = true;
      this.router.navigate(['/listarFilme'])
    });
  }

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
