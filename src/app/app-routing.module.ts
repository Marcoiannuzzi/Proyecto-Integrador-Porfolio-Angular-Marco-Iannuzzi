import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { NuevaEduComponent } from './forms/educacion/nueva-edu.component';
import { NuevaExpComponent } from './forms/experiencia/nueva-exp.component';
import { NuevoProyComponent } from './forms/proyecto/nuevo-proy.component';
import { NuevaSkillComponent } from './forms/skill/nueva-skill.component';

const routes: Routes = [
  {path:"", component: InicioComponent},
  {path:"inicio", component: InicioComponent},
  {path:"login", component: LoginComponent},
  {path:'nuevaEdu',component: NuevaEduComponent},
  {path:'nuevaExp', component: NuevaExpComponent},
  {path:'nuevaSkill', component: NuevaSkillComponent},
  {path:'nuevoProy', component:NuevoProyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
