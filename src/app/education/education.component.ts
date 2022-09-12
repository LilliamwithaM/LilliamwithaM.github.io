import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education : Array<any> = [];
  constructor() { }

  ngOnInit(): void {

    let school1 = {
      fecha: "2014 - 2017",
      area: "Ofimática",
      empresa:"Escuela Secundaria Técnica No.84"
    };

    let school2 = {
      fecha: "2017 - 2020",
      area: "Programación",
      empresa:"Centro de Bachillerato Tecnológico Industrial y de Servicios no. 142"
    };

    let school3 = {
      fecha: "2020 - Actual",
      area: "Ingeniería de Software",
      empresa:"Universidad Veracruzana"
    };

    this.education.push(school1);
    this.education.push(school2);
    this.education.push(school3);
  }

}
