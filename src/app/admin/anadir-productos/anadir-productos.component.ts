// anadir-productos.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Marca } from '../Marca.model'

@Component({
  selector: 'app-anadir-productos',
  templateUrl: './anadir-productos.component.html',
  styleUrls: ['./anadir-productos.component.css'],
  standalone: true,
  imports: [FormsModule, NgFor]
})
export class AnadirProductosComponent implements OnInit {
  producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    tipo: '',
    imagen: '',
    marcas: [] as Marca[] 
  };

  marcasDisponibles: Marca[] = []; // Lista de marcas disponibles

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.obtenerMarcas(); // Cargar marcas al iniciar el componente
  }

  obtenerMarcas(): void {
    this.http.get<Marca[]>('http://localhost:8081/marcas').subscribe({
      next: (data) => {
        this.marcasDisponibles = data;
      },
      error: (error) => {
        console.error('Error al obtener marcas:', error);
      }
    });
  }

  anadirProducto(): void {
    const productoConMarcas = {
      ...this.producto,
      marcas: this.producto.marcas.map(id => ({ id }))
    };
    this.http.post('http://localhost:8081/productos', productoConMarcas).subscribe({
      next: () => {
        alert('Producto añadido correctamente');
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        console.error('Error al añadir el producto:', error);
        alert('Hubo un error al añadir el producto');
      }
    });
  }
 
asociarMarcasAProducto(productoId: number): void {
  if (this.producto.marcas.length > 0) {
    const marcaIds = this.producto.marcas.map(marca => marca.id);
    this.http.put(`http://localhost:8081/marcas/producto/${productoId}`, marcaIds).subscribe({
      next: () => {
        alert('Producto añadido correctamente con marcas');
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        console.error('Error al asociar marcas:', error);
        alert('El producto se añadió, pero hubo un error al asociar las marcas');
      }
    });
  } else {
    alert('Producto añadido correctamente');
    this.router.navigate(['/admin']);
  }
}

}
