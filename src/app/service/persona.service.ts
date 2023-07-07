import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  url = 'https://localhost:7126/api/'
  constructor(private http: HttpClient) { }


  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(`${this.url}personas/1`);
  }

  public updatePersona(persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(`${this.url}personas`,persona);
  }

}
