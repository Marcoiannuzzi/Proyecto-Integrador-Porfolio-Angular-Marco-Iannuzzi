import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:Persona;
  email:String|undefined;
  password:String|undefined;
  logged:boolean=false;

  constructor(private router:Router, private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data)=>this.user=data)
    
  }

  login():void{
   if(this.user?.password == this.password && this.user?.email == this.email){
    this.logged=true;
    sessionStorage.setItem("token","conectado");
    this.router.navigate(['inicio'])
   }else{
    alert("usuario o contraseña incorrectos!!")
   }


  }

  volver(){
    this.router.navigate(["inicio"])
  }
}
