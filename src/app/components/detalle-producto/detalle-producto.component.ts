import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ComprasService } from '../../services/comprar.service';
import { NgFor, NgIf } from '@angular/common';
import { ProductosService } from '../../services/marcas-productos.service';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
  imports: [NgIf, NgFor],
})
export class DetalleProductoComponent implements OnInit {
  producto: any = {};
  marcas: any[] = []; 

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private comprasService: ComprasService,
    private productosService: ProductosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const state = history.state;
    if (state && state.producto) {
      this.producto = state.producto;
      this.obtenerMarcasDelProducto(this.producto.id);
    } else {
      this.router.navigate(['/']);
    }
  }

  obtenerMarcasDelProducto(productoId: number) {
    this.productosService.obtenerMarcasDeProducto(productoId).subscribe({
      next: (marcas) => {
        this.marcas = marcas;
      },
      error: (error) => {
        console.error('Error al obtener marcas:', error);
      }
    });
  }

  comprarProducto() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    this.comprasService.registrarCompra(this.producto).subscribe({
      next: () => {
        alert('Compra realizada con éxito');
        this.router.navigate(['']);
      },
      error: (error) => {
        console.error('Error al comprar:', error);
        alert('Error al procesar la compra');
      }
    });
  }
}
