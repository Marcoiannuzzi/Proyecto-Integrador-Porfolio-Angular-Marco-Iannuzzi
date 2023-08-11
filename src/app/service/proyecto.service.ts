import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url = environment.urlDeveloper

  constructor(private http:HttpClient) { }

  public getProyecto():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.url}Proyectos`);
  } 
  
  public getOneProyecto(id:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(`${this.url}Proyectos/${id}`)
  }

   public createProyecto(proyecto:Proyecto):Observable<any>{
    return this.http.post<any>(`${this.url}Proyectos`, proyecto)
  }

  public updateProyecto(proyecto:Proyecto):Observable<any>{
    return this.http.put<any>(`${this.url}Proyectos`, proyecto)
  }

  public deleteProyecto(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}Proyectos/${id}`)
  }

 
}
