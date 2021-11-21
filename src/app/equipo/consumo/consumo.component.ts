import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/models/equipo.model';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css']
})
export class ConsumoComponent implements OnInit {

  public equipos: Equipo[]=[];

  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.traerEquipo();
  }

  traerEquipo(){
    this.equipoService.traerEquipo().subscribe((respuesta:any) => {
      console.log(respuesta);
      this.equipos=respuesta;
    })
  }

}
