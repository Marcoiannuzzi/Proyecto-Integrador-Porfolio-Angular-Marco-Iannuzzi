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

  constructor(private skillService:SkillService) { }

  ngOnInit(): void {
    this.skillService.getSkill().subscribe(data=>{this.listaSkills=data})
  }

}
