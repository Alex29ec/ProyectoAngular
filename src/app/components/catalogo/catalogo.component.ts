import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  imports: [CommonModule],
})

export class CatalogoComponent implements OnInit {

  videojuegos = [
    {
      id:1,
      nombre: 'The Last of Us Part II',
      precio: 59.99,
      imagen: 'assets/img/the-last-of-us-2.jpg'
    },
    {
      
      id:2,
      nombre: 'Cyberpunk 2077',
      precio: 49.99,
      imagen: 'assets/img/cyberpunk-2077.jpg'
    },
    {
      id:3,
      nombre: 'Spider-Man: Miles Morales',
      precio: 39.99,
      imagen: 'assets/img/spider-man-miles-morales.jpg'
    },
    {
      id:4,
      nombre: 'Hades',
      precio: 24.99,
      imagen: 'assets/img/hades.jpg'
    }
  ];

  constructor(private router :Router) { }

  ngOnInit() {
  }

  verDetalles(id: number) {
    this.router.navigate(['/producto', id]);
    
  }

}
