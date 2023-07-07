import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-nueva-edu',
  templateUrl: './nueva-edu.component.html',
  styleUrls: ['./nueva-edu.component.css']
})
export class NuevaEduComponent implements OnInit {

  id: number = 0;
  institucion:String ='';
  titulo:String = '';
  inicio:String = '';
  fin:String = '';
  

  constructor(private router:Router, private educacionService:EducacionService) { }

  ngOnInit(): void {
  }

  enviar(){
    const edu:Educacion = {
      id:this.id,
      institucion: this.institucion,
      titulo: this.titulo,
      inicio: this.inicio,
      fin: this.fin
    } 
    
    this.educacionService.createEducacion(edu).subscribe(()=>{
      alert('Se ha agregado una nueva educacion!');
      this.router.navigate(['inicio']);
    });

  }

  volver(){
    this.router.navigate(['inicio'])
  }

}
