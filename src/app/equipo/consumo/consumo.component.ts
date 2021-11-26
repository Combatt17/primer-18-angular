import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //Manejo del formulario
import { Equipo } from 'src/app/models/equipo.model';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css']
})
export class ConsumoComponent implements OnInit {

  //Contiene los equipos que vengan de la DB
  public equipos: Equipo[]=[];

  

  constructor(private equipoService: EquipoService ) { }

  ngOnInit(): void {
    
    this.traerEquipo();
  }


  //Ejecuta el método GET del services
  traerEquipo(){
    this.equipoService.traerEquipo().subscribe((respuesta:any) => {
      this.equipos=respuesta;
    })
  }

  //Ejecuta el método POST del services
  enviar(body: Equipo){
    
      this.equipoService.agregarEquipo(body).subscribe((respuesta: any) => {
        console.log(respuesta)
        this.traerEquipo();
      })
  }
/*
  editar(dato:Equipo){
    
    //Llenado el formulario con los datos seleccionados
    this.EquipoForm.controls['id'].setValue(dato.id)
    this.EquipoForm.controls['nombre'].setValue(dato.nombre)
    
  }*/



}
