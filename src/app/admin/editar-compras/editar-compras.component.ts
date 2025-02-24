import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-compras',
  templateUrl: './editar-compras.component.html',
  styleUrls: ['./editar-compras.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class EditarComprasComponent implements OnInit {
  compraId!: number;
  compra: any = { fecha: '', total: 0, id_producto: null, id_usuario: null };
  productos: any[] = [];
  usuarios: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.compraId = +params['id'];
      this.obtenerCompra(this.compraId);
    });

    // Obtener productos y usuarios
    this.obtenerProductos();
    this.obtenerUsuarios();
  }

  // Obtener los detalles de la compra
  obtenerCompra(id: number): void {
    this.http.get<any>(`http://localhost:8081/compras/${id}`).subscribe({
      next: (data) => {
        this.compra = data;
      },
      error: (error) => console.error('Error al obtener la compra:', error)
    });
  }

  // Obtener la lista de productos
  obtenerProductos(): void {
    this.http.get<any[]>('http://localhost:8081/productos').subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (error) => console.error('Error al obtener productos:', error)
    });
  }

  // Obtener la lista de usuarios
  obtenerUsuarios(): void {
    this.http.get<any[]>('http://localhost:8081/api/usuarios').subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (error) => console.error('Error al obtener usuarios:', error)
    });
  }

  // Método para actualizar la compra
  actualizarCompra(): void {
    this.http.put(`http://localhost:8081/compras/${this.compraId}`, this.compra).subscribe({
      next: () => {
        alert('Compra actualizada correctamente');
        this.router.navigate(['/admin']);  // Redirigir al administrador después de la actualización
      },
      error: (error) => {
        console.error('Error al actualizar la compra:', error);
        alert('Hubo un error al actualizar la compra');
      }
    });
  }
}
