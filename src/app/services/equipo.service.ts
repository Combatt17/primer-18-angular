import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipo } from '../models/equipo.model';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http: HttpClient) { }

  traerEquipo(){
    return this.http.get<Equipo>('http://localhost:8080/api/equipos');
  }

  agregarEquipo(dato: Equipo){
    return this.http.post('http://localhost:8080/api/equipos',dato);
  }

  
}
