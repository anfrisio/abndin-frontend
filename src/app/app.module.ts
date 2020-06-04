import { VagasModule } from './vagas/vagas.module';
import { PerfilModule } from './perfil/perfil.module';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    LoginModule,
    PerfilModule,
    TableModule,
    VagasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
