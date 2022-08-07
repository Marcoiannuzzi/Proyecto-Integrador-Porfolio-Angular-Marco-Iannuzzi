import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion:Educacion[]|undefined;
  token:string|null = null;

  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.cargarEducacion();
    this.token=sessionStorage.getItem('token')
  }
  cargarEducacion(){
    this.educacionService.getEducacion().subscribe((data)=>{this.educacion=data});
  }

  crearEducacion(educacion:Educacion){
    this.educacionService.createEducacion(educacion).subscribe(()=>this.cargarEducacion())
  }

  borrar(id:number){
    this.educacionService.deleteEducacion(id).subscribe(()=> this.cargarEducacion())
  }

}
