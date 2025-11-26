
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080';
  
  private apiPath = '/api';

  constructor(private http: HttpClient) { }

  
  cadastrarUsuario(dados: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.apiPath}/cadastro`, dados); 
  }

  solicitarServico(dados: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.apiPath}/servicos`, dados);
  }
}