import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion-update',
  templateUrl: './educacion-update.component.html',
  styleUrls: ['./educacion-update.component.css']
})
export class EducacionUpdateComponent implements OnInit {

  educacion:Educacion|undefined;


  constructor(private aRoute:ActivatedRoute, private eduservice:EducacionService, private route:Router) {
    
   }

  ngOnInit(): void {
    const id = parseInt(this.aRoute.snapshot.paramMap.get('id')) ;
    this.eduservice.getOneEducation(id).subscribe((data)=>{
      this.educacion=data})
  }

  update(){
    this.eduservice.updateEducacion(this.educacion).subscribe(()=>{
      alert('Se ha actualizado la educacion de forma correcta!')
      this.route.navigate(['inicio'])
    })
  }
  
  volver(){
    this.route.navigate(['inicio'])
  }
  
}
