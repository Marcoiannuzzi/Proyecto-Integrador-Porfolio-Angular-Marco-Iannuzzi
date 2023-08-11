import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url = environment.urlDeveloper

  constructor(private http:HttpClient) { }

  public getExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.url}experiencias`)
  }

  public createExperiencia(experiencia:Experiencia):Observable<any>{
    return this.http.post<any>(`${this.url}experiencias`, experiencia)
  }

  public updateExperiencia(experiencia:Experiencia):Observable<any>{
    return this.http.put<any>(`${this.url}experiencias`, experiencia)
  }

  public deleteExperiencia(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}experiencias/${id}`)
  }

  public getOneExperiencia(id:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(`${this.url}experiencias/${id}`)
  }
}
