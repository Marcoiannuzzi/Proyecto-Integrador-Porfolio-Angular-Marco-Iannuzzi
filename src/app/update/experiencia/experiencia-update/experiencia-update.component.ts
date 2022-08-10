import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia-update',
  templateUrl: './experiencia-update.component.html',
  styleUrls: ['./experiencia-update.component.css']
})
export class ExperienciaUpdateComponent implements OnInit {

  expe:Experiencia 

  constructor(private ruoter:Router, private experienciaService:ExperienciaService, private aRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id= parseInt(this.aRoute.snapshot.paramMap.get('id'));
    this.experienciaService.getOneExperiencia(id).subscribe((data)=> this.expe = data)
  }

  expUpdate(){
    this.experienciaService.updateExperiencia(this.expe).subscribe(()=>alert('Se ha actualizado la experiencia de forma correcta!'))
    this.ruoter.navigate(['inicio'])
  }

}
