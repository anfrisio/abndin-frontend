import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagasComponent } from './vagas/vagas.component';
import { VagaComponent } from './vaga/vaga.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [VagasComponent, VagaComponent],
  imports: [
    CommonModule,
    FormsModule,
    TableModule
  ]
})
export class VagasModule { }
