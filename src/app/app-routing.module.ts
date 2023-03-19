import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaAlumnoComponent } from './AltaAlumno/alta-alumno/alta-alumno.component';
import { ListaalumnosComponent } from './ListaAlumnos/listaalumnos/lista-alumnos.component';

const routes: Routes = [
  {
    path: 'alumnos/listado', component: ListaalumnosComponent
  },
  {
    path: 'alumnos/alta', component: AltaAlumnoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
