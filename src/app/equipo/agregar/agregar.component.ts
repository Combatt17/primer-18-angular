import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipo } from 'src/app/models/equipo.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  //Crear atributo que maneja el formulario
  EquipoForm!: FormGroup;

  @Output() onNuevoEquipo: EventEmitter<Equipo>=new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //construimos el formulario
    this.EquipoForm=this.fb.group({
      id: ['',Validators.required],
      nombre: ['',Validators.required]
    })
  }

  enviar(){
    console.log(this.EquipoForm.status)
    if(this.EquipoForm.status=="VALID"){
      this.onNuevoEquipo.emit(this.EquipoForm.value)
    }else{
      alert("oN puede haber campos vacios")
    }
  }
}
