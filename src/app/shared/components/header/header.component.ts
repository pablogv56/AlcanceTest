import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', //nombre del componente para reutilizar
  template: `
  <mat-toolbar>
    <span>Angular Test</span>
  </mat-toolbar>
  `, //Tamplate in line of HTML
  styleUrls: ['./header.component.css'] //la url de los estilos
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
