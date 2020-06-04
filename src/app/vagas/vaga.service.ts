import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  constructor(private http: HttpClient) {
  }

  getVagas() {
    return this.http.get<any>('http://localhost:3000/vagas');
  }
}
