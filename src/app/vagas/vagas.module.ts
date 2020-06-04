import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagasComponent } from './vagas/vagas.component';
import { VagaComponent } from './vaga/vaga.component';



@NgModule({
  declarations: [VagasComponent, VagaComponent],
  imports: [
    CommonModule
  ]
})
export class VagasModule { }
