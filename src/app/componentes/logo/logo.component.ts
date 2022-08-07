import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  token:string|null=null;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.token=sessionStorage.getItem('token');
  }

  login(){
    this.router.navigate(["login"]);
  }

  logOut(){
    sessionStorage.removeItem('token');
    this.router.navigate(['login'])
  }

}
