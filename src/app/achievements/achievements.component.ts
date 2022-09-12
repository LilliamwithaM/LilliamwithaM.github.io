import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  achievements : Array<any> = [];
  constructor() { }

  ngOnInit(): void {

    let obj1 = {
      fecha: "2017",
      nombre: "Microsoft Office 365",
      descripcion:"Competencias para el uso de las herramientas de Microsoft Office 365."
    };

    let obj2 = {
      fecha: "2020",
      nombre: "The hour of code",
      descripcion:"Conceptos básicos de Ciencias computacionales."
    };

    let obj3 = {
      fecha: "2020",
      nombre: "Técnico en Programación",
      descripcion:"Certificado en Técnica en el área de Programación."
    };

    let obj4 = {
      fecha: "2022",
      nombre: "Certificado SCRUM",
      descripcion:"Certificado en SCRUM"
    };

    this.achievements.push(obj1);
    this.achievements.push(obj2);
    this.achievements.push(obj3);
    this.achievements.push(obj4);
  }
}