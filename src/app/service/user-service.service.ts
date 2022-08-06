import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url = 'http://localhost:8081/api/'

  constructor(private http: HttpClient) { }

  public getEducacion():Observable<User>{
    return this.http.get<User>(`${this.url}user/1`)
  }

}
