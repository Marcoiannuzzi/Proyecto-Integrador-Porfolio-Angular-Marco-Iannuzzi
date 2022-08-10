import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url='http://localhost:8081/api/'

  constructor(private http:HttpClient) { }

  public getProyecto():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.url}proyectos`);
  } 
  
  public getOneProyecto(id:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(`${this.url}proyetos/${id}`)
  }

   public createProyecto(proyecto:Proyecto):Observable<any>{
    return this.http.post<any>(`${this.url}proyectos`, proyecto)
  }

  public updateProyecto(proyecto:Proyecto):Observable<any>{
    return this.http.put<any>(`${this.url}proyectos`, proyecto)
  }

  public deleteProyecto(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}proyectos/${id}`)
  }

 
}
