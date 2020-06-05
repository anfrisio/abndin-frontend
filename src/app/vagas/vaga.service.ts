import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vaga } from './vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  
  constructor(private http: HttpClient) {
  }
  
  getVagas() {
    return this.http.get<Vaga[]>('http://localhost:3000/vagas');
  }

  persist(vaga: Vaga) {
    return this.http.post<Vaga>('http://localhost:3000/vagas', vaga);
  }
}
