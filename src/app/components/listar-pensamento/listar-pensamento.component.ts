import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento/pensamento.service';

@Component({
  selector: 'listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  
  listaPensamentos : Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit() {
    this.service.listar().subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos
    })
  }

}
