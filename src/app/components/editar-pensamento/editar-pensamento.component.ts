import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  constructor(
    private service : PensamentoService,
    private router : Router,
    private route : ActivatedRoute

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

  editar(pensamento: Pensamento){
    this.service.editar(pensamento).subscribe(() => {
      this.router.navigate(['/listar-pensamento']);
    })
  }

  cancelar(){
    this.router.navigate(['/listar-pensamento']);
  }

}
