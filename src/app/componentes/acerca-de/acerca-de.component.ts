import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  persona : Persona|undefined;
  token:string|null = null;

  constructor(private personaService:PersonaService ) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{this.persona=data})
    this.token = sessionStorage.getItem('token')
  }


}
