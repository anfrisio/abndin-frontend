
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilDetailComponent } from './perfil-detail/perfil-detail.component';
import { PerfilListComponent } from './perfil-list/perfil-list.component';



@NgModule({
  declarations: [PerfilDetailComponent, PerfilListComponent],
  imports: [
    CommonModule
  ]
})
export class PerfilModule { }
