import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url = 'http://localhost:8081/api/'

  constructor(private http: HttpClient) { }

  public getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.url}estudios`)
  }

  public createEducacion(educacion:Educacion):Observable<any>{
    return this.http.post<any>(`${this.url}estudios`, educacion)
  }

  public updateEducacion(educacion:Educacion):Observable<any>{
    return this.http.put<any>(`${this.url}estudios`, educacion)
  }

  public deleteEducacion(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}estudios/${id}`)
  }



}
