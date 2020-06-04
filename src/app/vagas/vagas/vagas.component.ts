import { Component, OnInit } from '@angular/core';
import { VagaService } from '../vaga.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  constructor(private service: VagaService) { }

  ngOnInit(): void {
    this.getVagas();
  }

  getVagas() {
    this.service.getVagas()
        .subscribe(resp => console.log(resp));
  }

}
