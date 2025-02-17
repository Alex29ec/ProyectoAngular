import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  standalone: true,
  styleUrls: ['./admin.component.css'],
  imports: [NgForOf]
})
export class AdminComponent implements OnInit {
  productos: any[] = [];
  usuarios: any[] = [];
  compras: any[] = [];
  marcas: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerUsuarios();
    this.obtenerCompras();
    this.obtenerMarcas(); 
  }

  // Obtener lista de productos
  obtenerProductos(): void {
    this.http.get<any[]>('http://localhost:8081/productos').subscribe({
      next: (data) => this.productos = data,
      error: (error) => console.error('Error al obtener los productos:', error)
    });
  }

  // Obtener lista de usuarios
  obtenerUsuarios(): void {
    this.http.get<any[]>('http://localhost:8081/api/usuarios').subscribe({
      next: (data) => this.usuarios = data,
      error: (error) => console.error('Error al obtener los usuarios:', error)
    });
  }

  // Obtener lista de compras
  obtenerCompras(): void {
    this.http.get<any[]>('http://localhost:8081/compras').subscribe({
      next: (data) => this.compras = data,
      error: (error) => console.error('Error al obtener las compras:', error)
    });
  }

  // Obtener lista de marcas
  obtenerMarcas(): void {
    this.http.get<any[]>('http://localhost:8081/marcas').subscribe({
      next: (data) => this.marcas = data,
      error: (error) => console.error('Error al obtener las marcas:', error)
    });
  }

  // Eliminar producto
  deleteProduct(id: number): void {
    this.http.delete(`http://localhost:8081/productos/${id}`).subscribe({
      next: () => this.obtenerProductos(),
      error: (error) => console.error('Error al eliminar el producto:', error)
    });
  }

  // Eliminar usuario
  deleteUser(id: number): void {
    this.http.delete(`http://localhost:8081/api/usuarios/${id}`).subscribe({
      next: () => this.obtenerUsuarios(),
      error: (error) => console.error('Error al eliminar el usuario:', error)
    });
  }

  // Eliminar compra
  deleteCompra(id: number): void {
    this.http.delete(`http://localhost:8081/compras/${id}`).subscribe({
      next: () => this.obtenerCompras(),
      error: (error) => console.error('Error al eliminar la compra:', error)
    });
  }

  // Eliminar marca
  deleteMarca(id: number): void {
    this.http.delete(`http://localhost:8081/marcas/${id}`).subscribe({
      next: () => this.obtenerMarcas(),
      error: (error) => console.error('Error al eliminar la marca:', error)
    });
  }

  // Agregar producto (redirigir al formulario de creación)
  addProduct(): void {
    this.router.navigate(['/admin/agregar-producto']);
  }

  // Agregar marca (redirigir al formulario de creación)
  addMarca(): void {
    this.router.navigate(['/admin/anadir-marca']);
  }

  // Editar producto
  editProduct(id: number): void {
    localStorage.setItem('productoId', id.toString()); // Guardamos el ID en localStorage
    this.router.navigate([`/admin/editar-producto`, id]);
  }

  // Editar marca
  editMarca(id: number): void {
    localStorage.setItem('marcaId', id.toString()); // Guardamos el ID de la marca en localStorage
    this.router.navigate([`/admin/editar-marca`, id]);
  }

  // Editar usuario
  editUser(id: number): void {
    localStorage.setItem('usuarioId', id.toString()); // Guardamos el ID en localStorage
    this.router.navigate([`/admin/editar-usuario`, id]);
  }

  // Editar compra
  editCompra(id: number): void {
    localStorage.setItem('compraId', id.toString()); // Guardamos el ID en localStorage
    this.router.navigate([`/admin/editar-compra`, id]);
  }
}
