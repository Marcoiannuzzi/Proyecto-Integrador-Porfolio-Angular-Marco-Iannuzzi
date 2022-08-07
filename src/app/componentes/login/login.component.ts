import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User | undefined;
  email:String|undefined;
  password:String|undefined;
  logged:boolean=false;

  constructor(private router:Router, private userService:UserServiceService) { }

  ngOnInit(): void {
    this.userService.getEducacion().subscribe((data)=>this.user=data)
    console.log(this.logged)
  }

  login():void{
   if(this.user?.password == this.password && this.user?.email == this.email){
    this.logged=true;
    console.log(this.logged)
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
