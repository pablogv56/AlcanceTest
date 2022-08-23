import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', //nombre del componente para reutilizar
  template: `
  <mat-toolbar>
    <span>+Alcance Test</span>
    <div class="links">
      <a mat-button routerLink="/petitions">Peticiones</a>
      <a mat-button routerLink="/users">Usuarios</a>
      <a mat-button routerLink="/albums">Albumes</a>
      <a mat-button routerLink="/posts">Posts</a>
    </div>
  </mat-toolbar>
  `, //Tamplate in line of HTML
  styleUrls: ['./header.component.css'] //la url de los estilos
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
