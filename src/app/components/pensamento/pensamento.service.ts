import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pensamento } from './pensamento';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly baseUrl = "http://localhost:3000/pensamentos";

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Pensamento[]>(this.baseUrl);
  }

  criar(pensamento : Pensamento){
    return this.http.post(this.baseUrl, pensamento);
  }

  excluir(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number){
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Pensamento>(url)
  }
  
}
