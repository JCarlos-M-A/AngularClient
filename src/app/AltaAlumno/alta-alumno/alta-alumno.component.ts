import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServicioRestService } from 'src/app/ServicioRest/servicio-rest.service';

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.css']
})
export class AltaAlumnoComponent {
  /**
   *ctor
   */
  constructor(private restService: ServicioRestService) {
    
  }

  @ViewChild("nombre")
  nombre!:ElementRef;

  @ViewChild("apPat")
  apPat!:ElementRef;

  @ViewChild("apMat")
  apMat!:ElementRef;

  @ViewChild("activo")
  activo!:ElementRef;

  Guardar(): void{
    const nombre: String = this.nombre.nativeElement.value;
    const apPat: String = this.apPat.nativeElement.value;
    const apMat: String = this.apMat.nativeElement.value;
    const activo: number = this.activo.nativeElement.value;
    this.restService.apiGuardarAlumno(nombre, apPat, apMat, activo);
  }
}
