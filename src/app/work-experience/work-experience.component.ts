import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience : Array<any> = [];
  constructor() { }

  ngOnInit(): void {

    let work1 = {
      fecha: "2020",
      ubicacion: "Potrerillo, Ver",
      puesto: "Soporte técnico",
      empresa:"Escuela Kokohnetzin",
      logros : [
          { descripcion: "Soporte y mantenimiento de las computadoras"},
          { descripcion: "Aplicación web utilizando HTML con conexión MySQL y XAMPP"},
          { descripcion: "Instalación de Software"}

      ]
    };

    this.workExperience.push(work1);
  }
}