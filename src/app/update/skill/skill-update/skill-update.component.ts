import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill-update',
  templateUrl: './skill-update.component.html',
  styleUrls: ['./skill-update.component.css']
})
export class SkillUpdateComponent implements OnInit {

  skill:Skill

  constructor(private router:Router, private skillService:SkillService, private aRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id=parseInt(this.aRoute.snapshot.paramMap.get('id'));
    this.skillService.getOneSkill(id).subscribe((data)=>this.skill=data)
  }

  update(){
    this.skillService.updateSkill(this.skill).subscribe(()=>alert('Se ha actualizado la educacion de forma correcta!'))
    this.router.navigate(['inicio'])
  }

  volver(){
    this.router.navigate(['inicio'])
  }

}
