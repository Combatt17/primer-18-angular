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

  public equipos: Equipo[]=[];
  //Crear atributo que maneja el formulario
  EquipoForm!: FormGroup;

  constructor(private equipoService: EquipoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    //construimos el formulario
    this.EquipoForm=this.fb.group({
      id: [''],
      nombre: ['',Validators.required]
    })
    this.traerEquipo();
  }

  traerEquipo(){
    this.equipoService.traerEquipo().subscribe((respuesta:any) => {
      this.equipos=respuesta;
    })
  }

  enviar(){
    console.log(this.EquipoForm.status)
    if(this.EquipoForm.status=="VALID"){
      this.equipoService.agregarEquipo(this.EquipoForm.value).subscribe((respuesta: any) => {
        console.log(respuesta)
        if(respuesta.estado=="true"){
          this.traerEquipo();
          this.EquipoForm=this.fb.group({
            id: [''],
            nombre: ['']
          })
        }
      })
    }else{
      alert("No puede haber campos vacios")
    }
    
  }

}
