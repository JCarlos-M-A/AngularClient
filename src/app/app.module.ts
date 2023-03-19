import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaalumnosComponent } from './ListaAlumnos/listaalumnos/lista-alumnos.component';
import { AltaAlumnoComponent } from './AltaAlumno/alta-alumno/alta-alumno.component';
import { DetalleAlumnoComponent } from './DetalleAlimno/detalle-alumno/detalle-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaalumnosComponent,
    AltaAlumnoComponent,
    DetalleAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
