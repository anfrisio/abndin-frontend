import { Component, OnInit } from '@angular/core';
import { VagaService } from '../vaga.service';
import { Vaga } from '../vaga.model';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  vagas: Vaga[] = [];

  constructor(private service: VagaService) { }

  ngOnInit(): void {
    this.getVagas();
  }

  getVagas() {
    this.service.getVagas()
        .subscribe(resp => {
          this.vagas = resp;
        });
  }

}
