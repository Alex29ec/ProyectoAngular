import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Producto } from '../../models/producto.model';
import { ProductosService } from '../../productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  imports: [NgFor, RouterModule],
  standalone: true

})

export class CatalogoComponent implements OnInit {

  videojuegos: Producto[] = [];
  constructor(private router: Router, private api: ProductosService) {}

  ngOnInit(): void {
    this.api.getProductos().subscribe(
      (data) => {
        this.videojuegos = data;
      },
      (error) => {
        console.log(error);
    });
  }

  verDetalles(id: number) {
    const producto = this.videojuegos.find(p => p.id === id);

    if (producto) {
      this.router.navigate(['/detalle', id], { state: { producto } });
    }
  }


}
