import { VagasComponent } from './vagas/vagas/vagas.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilDetailComponent } from './perfil/perfil-detail/perfil-detail.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil-detail', component: PerfilDetailComponent },
  { path: 'vagas', component: VagasComponent },
  { path: '', redirectTo: 'login' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
