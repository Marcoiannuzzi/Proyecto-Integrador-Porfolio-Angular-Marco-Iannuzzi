import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { NuevaEduComponent } from './forms/educacion/nueva-edu.component';
import { NuevaExpComponent } from './forms/experiencia/nueva-exp.component';
import { NuevoProyComponent } from './forms/proyecto/nuevo-proy.component';
import { NuevaSkillComponent } from './forms/skill/nueva-skill.component';
import { EducacionUpdateComponent } from './update/educacion/educacion-update/educacion-update.component';
import { ExperienciaUpdateComponent } from './update/experiencia/experiencia-update/experiencia-update.component';
import { ProyectoUpdateComponent } from './update/proyecto/proyecto-update/proyecto-update.component';
import { SkillUpdateComponent } from './update/skill/skill-update/skill-update.component';

const routes: Routes = [
  {path:"", component: InicioComponent},
  {path:"inicio", component: InicioComponent},
  {path:"login", component: LoginComponent},
  {path:'nuevaEdu',component: NuevaEduComponent},
  {path:'nuevaExp', component: NuevaExpComponent},
  {path:'nuevaSkill', component: NuevaSkillComponent},
  {path:'nuevoProy', component:NuevoProyComponent},
  {path:'updateEdu/:id', component:EducacionUpdateComponent},
  {path:'updateExp/:id', component:ExperienciaUpdateComponent,},
  {path:'updateSkill/:id', component: SkillUpdateComponent},
  {path:'updateProyecto/:id', component: ProyectoUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
