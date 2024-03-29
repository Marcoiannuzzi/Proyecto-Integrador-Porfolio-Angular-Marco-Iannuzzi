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

  id:number=0;
  titulo:String='';
  descripcion:String=''
  proyUrl:String='';


  constructor(private router:Router, private proyectoService:ProyectoService) { }

  ngOnInit(): void {
  }

  enviar(){
    const proy:Proyecto = {
      id : this.id,
      titulo : this.titulo,
      descripcion : this.descripcion,
      proyUrl : this.proyUrl
    }

    this.proyectoService.createProyecto(proy).subscribe({
      next:()=>{
        alert('Proyecto creado con exito!')
        this.router.navigate(['inicio']) 
      },
      error:(err)=>console.error(err)
    });
  }

  volver(){
    this.router.navigate(['inicio']);
  }

}
