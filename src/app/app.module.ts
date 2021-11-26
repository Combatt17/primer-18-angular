import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumoComponent } from './equipo/consumo/consumo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarComponent } from './equipo/listar/listar.component';
import { AgregarComponent } from './equipo/agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumoComponent,
    ListarComponent,
    AgregarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
