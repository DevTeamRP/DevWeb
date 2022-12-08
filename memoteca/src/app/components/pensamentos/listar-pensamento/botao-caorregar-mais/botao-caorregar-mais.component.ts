import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-caorregar-mais',
  templateUrl: './botao-caorregar-mais.component.html',
  styleUrls: ['./botao-caorregar-mais.component.css']
})
export class BotaoCaorregarMaisComponent implements OnInit {

  @Input() haMaisPensamentos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
