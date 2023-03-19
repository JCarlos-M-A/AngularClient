import { Component } from '@angular/core';
import { ServicioRestService } from 'src/app/ServicioRest/servicio-rest.service';

@Component({
  selector: 'app-listaalumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaalumnosComponent {
  public nombre:String ="Carlos";
  public gustos:String[] =["Dormir", "Videojuegos", "Tecnologia", "Motos"];

  constructor(private servicio: ServicioRestService){
    this.servicio.apiListaAlumnos();
  }

  get alumnos(){
    return this.servicio.alumnos;
  }
}

