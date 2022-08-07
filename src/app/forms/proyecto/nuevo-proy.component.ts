import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-nuevo-proy',
  templateUrl: './nuevo-proy.component.html',
  styleUrls: ['./nuevo-proy.component.css']
})
export class NuevoProyComponent implements OnInit {

  proyId:number=0;
  titulo:String='';
  descripcion:String=''
  proyUrl:String='';


  constructor(private router:Router, private proyectoService:ProyectoService) { }

  ngOnInit(): void {
  }

  enviar(){
    const proy:Proyecto = {
      proyId : this.proyId,
      titulo : this.titulo,
      descripcion : this.descripcion,
      proyUrl : this.proyUrl
    }

    this.proyectoService.createProyecto(proy).subscribe(()=>alert('Proyecto creado con exito!'));
    this.router.navigate(['inicio']);

  }

  volver(){
    this.router.navigate(['inicio']);
  }

}
