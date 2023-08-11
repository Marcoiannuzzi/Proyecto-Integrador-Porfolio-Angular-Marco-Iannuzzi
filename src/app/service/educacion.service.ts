import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url = environment.urlDeveloper

  constructor(private http: HttpClient) { }

  public getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.url}estudios`)
  }

  public getOneEducation(id:number):Observable<Educacion>{
    return this.http.get<Educacion>(`${this.url}estudios/${id}`)
  }

  public createEducacion(educacion:Educacion):Observable<any>{
    return this.http.post<any>(`${this.url}estudios`, educacion)
  }

  public updateEducacion(educacion:Educacion):Observable<any>{
    return this.http.put<any>(`${this.url}estudios/${educacion.id}`, educacion)
  }

  public deleteEducacion(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}estudios/${id}`)
  }



}
