import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-nueva-skill',
  templateUrl: './nueva-skill.component.html',
  styleUrls: ['./nueva-skill.component.css']
})
export class NuevaSkillComponent implements OnInit {

  id:number=0;
  nombre:String='';
  porcentaje:number=0;

  constructor(private router:Router, private skillService:SkillService) { }

  ngOnInit(): void {
  }

  enviar(){
    const skill:Skill = {
      id:this.id,
      nombre:this.nombre,
      porcentaje:this.porcentaje,
    }
    this.skillService.createSkill(skill).subscribe(()=> alert('Nueva Skill agregada con exito!'));
    this.router.navigate(['inicio']);

  }

  volver(){
    this.router.navigate(['inicio']);
  }


}
