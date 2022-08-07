import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  listaExperiencias:Experiencia[]|undefined;
  experiencia:Experiencia|undefined;
  token:string|null=null;

  constructor(private experianciaService:ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExp();
    this.token=sessionStorage.getItem('token')
  }

  cargarExp(){
    this.experianciaService.getExperiencia().subscribe((data)=>{this.listaExperiencias=data});
  }

  crearExp(experiencia:Experiencia){
    this.experianciaService.createExperiencia(experiencia).subscribe(()=>this.cargarExp())
  }

  borrar(id:number){
    this.experianciaService.deleteExperiencia(id).subscribe(()=> this.cargarExp())
  }

}
