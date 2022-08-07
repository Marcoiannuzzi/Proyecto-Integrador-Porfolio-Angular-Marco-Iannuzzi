import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  listaProyectos:Proyecto[]|undefined;
  token:string|null=null;

  constructor(private proyectoService:ProyectoService) { }

  ngOnInit(): void {

    this.proyectoService.getProyect().subscribe(data=>this.listaProyectos=data);
    this.token=sessionStorage.getItem('token')
  }

}
