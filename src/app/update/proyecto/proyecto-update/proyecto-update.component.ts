import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyecto-update',
  templateUrl: './proyecto-update.component.html',
  styleUrls: ['./proyecto-update.component.css']
})
export class ProyectoUpdateComponent implements OnInit {

  proyect:Proyecto;

  constructor( private router:Router, private proyectoService:ProyectoService, private aRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id= parseInt(this.aRoute.snapshot.paramMap.get('id'));
    this.proyectoService.getOneProyecto(id).subscribe(data=>console.log(data))
  }

  

  update(){
    const id= parseInt(this.aRoute.snapshot.paramMap.get('id'));
    this.proyectoService.updateProyecto(this.proyect).subscribe(()=>alert('Se ha actualizado el proyecto de forma correcta!'))
    this.router.navigate(['inicio'])
  }

  volver(){
    this.router.navigate(['inicio'])
  }

}
