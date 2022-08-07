import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url='http://localhost:8081/api/'

  constructor(private http:HttpClient) { }

  public getSkill():Observable<Skill[]>{
    return this.http.get<Skill[]>(`${this.url}skills`)
  }

  public createSkill(skill:Skill):Observable<any>{
    return this.http.post<any>(`${this.url}skills`, skill)
  }

  public updateSkill(skill:Skill):Observable<any>{
    return this.http.put<any>(`${this.url}skills`, skill)
  }

  public deleteSkill(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}skills/${id}`)
  }
}
