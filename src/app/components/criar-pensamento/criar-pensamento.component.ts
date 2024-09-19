import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento/pensamento.service';
import { Pensamento } from '../pensamento/pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    autoria: "",
    conteudo: "",
    modelo: "modelo1"
  };

  constructor(private service : PensamentoService, private router : Router) { }

  ngOnInit(): void {
  }

  criar(){
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listar-pensamento'])
    })
  }

  cancelar(){
    this.router.navigate(['/listar-pensamento'])
  }

}
