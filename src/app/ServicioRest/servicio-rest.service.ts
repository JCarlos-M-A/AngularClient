import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicioRestService {

  public alumnos: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * apiListaAlumnos
   */
  public apiListaAlumnos():void {
    this.http.get('http://localhost:8080/api/alumnos').subscribe((resp: any)=>{
      console.log(resp);
      this.alumnos = resp;
    });
  }

  public apiGuardarAlumno(nombre: String, apPaterno: String, apMaterno:String, activo: number) {
    let datos = {
      nombre: nombre, 
      ap_paterno: apPaterno, 
      ap_materno: apMaterno, 
      activo: activo
    };

    this.http.post('http://localhost:8080/api/alumnos', datos, {observe: "response"})
      .subscribe((resp: any)=>{
        console.log(resp);
        this.router.navigate(['/alumnos/listado']);
    });
  }
}