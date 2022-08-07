import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  listaSkills:Skill[]|undefined;
  token: string | null = null;

  constructor(private skillService:SkillService) { }

  ngOnInit(): void {
    this.cargarSkill();
    this.token=sessionStorage.getItem('token');
  }

  cargarSkill(){
    this.skillService.getSkill().subscribe((data)=>{this.listaSkills=data});
  }

  crearSkill(educacion:Skill){
    this.skillService.createSkill(educacion).subscribe(()=>this.cargarSkill())
  }

  borrar(id:number){
    this.skillService.deleteSkill(id).subscribe(()=> this.cargarSkill())
  }

}
