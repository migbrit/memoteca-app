import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pensamento } from './pensamento';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly url = "http://localhost:3000/pensamentos";

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Pensamento[]>(this.url);
  }

  criar(pensamento : Pensamento){
    return this.http.post(this.url, pensamento);
  }
}
