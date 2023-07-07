import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-nueva-exp',
  templateUrl: './nueva-exp.component.html',
  styleUrls: ['./nueva-exp.component.css']
})
export class NuevaExpComponent implements OnInit {

  id: number = 0;
  institucion:String ='';
  tareas:String = '';
  inicio:String = '';
  fin:String = '';

  constructor(private router:Router, private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
  }

  enviar(){
    const exp:Experiencia={
      id:this.id,
      institucion:this.institucion,
      tareas:this.tareas,
      inicio:this.inicio,
      fin:this.fin
    }
    this.experienciaService.createExperiencia(exp).subscribe(()=>alert('Se ha agregado una nueva experiencia!'));
    this.router.navigate(['inicio']);
  }

  volver(){
    this.router.navigate(['inicio'])
  }

}
