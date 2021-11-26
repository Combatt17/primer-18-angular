import { Component, Input, OnInit } from '@angular/core';
import { Equipo } from 'src/app/models/equipo.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  @Input('entrada') public equipos: Equipo[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
