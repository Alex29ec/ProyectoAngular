import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  imports: [CommonModule],
})

export class CatalogoComponent implements OnInit {

  videojuegos = [
    {
      nombre: 'The Last of Us Part II',
      precio: 59.99,
      imagen: 'assets/img/the-last-of-us-2.jpg'
    },
    {
      nombre: 'Cyberpunk 2077',
      precio: 49.99,
      imagen: 'assets/img/cyberpunk-2077.jpg'
    },
    {
      nombre: 'Spider-Man: Miles Morales',
      precio: 39.99,
      imagen: 'assets/img/spider-man-miles-morales.jpg'
    },
    {
      nombre: 'Hades',
      precio: 24.99,
      imagen: 'assets/img/hades.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
