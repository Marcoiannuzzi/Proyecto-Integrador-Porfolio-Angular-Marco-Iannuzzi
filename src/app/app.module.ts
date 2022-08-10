import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LogoComponent } from './componentes/logo/logo.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { NuevoProyComponent } from './forms/proyecto/nuevo-proy.component';
import { NuevaEduComponent } from './forms/educacion/nueva-edu.component';
import { NuevaExpComponent } from './forms/experiencia/nueva-exp.component';
import { NuevaSkillComponent } from './forms/skill/nueva-skill.component';
import { EducacionUpdateComponent } from './update/educacion/educacion-update/educacion-update.component';
import { ExperienciaUpdateComponent } from './update/experiencia/experiencia-update/experiencia-update.component';
import { SkillUpdateComponent } from './update/skill/skill-update/skill-update.component';
import { ProyectoUpdateComponent } from './update/proyecto/proyecto-update/proyecto-update.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    LogoComponent,
    InicioComponent,
    LoginComponent,
    NuevoProyComponent,
    NuevaEduComponent,
    NuevaExpComponent,
    NuevaSkillComponent,
    EducacionUpdateComponent,
    ExperienciaUpdateComponent,
    SkillUpdateComponent,
    ProyectoUpdateComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
