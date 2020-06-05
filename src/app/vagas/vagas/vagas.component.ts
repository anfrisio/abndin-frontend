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
  vaga = new Vaga();

   isModalActive = false;

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

  toggleModal() {

    this.isModalActive = !this.isModalActive;
    this.vaga = new Vaga();

    

  }

  salvar() {
    this.service.persist(this.vaga)
        .subscribe(resp => {
          //TODO: Criar módulo de mensagens
          console.log(resp);
          this.toggleModal();
          this.getVagas();
        });
  }

}
