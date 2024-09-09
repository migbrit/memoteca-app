import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento = {
    conteudo: 'Teste',
    autoria: 'Mihail',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(){
    if (this.pensamento.conteudo.length >= 256){
      return "pensamento-g"
    }
    return "pensamento-p"
  }

}
