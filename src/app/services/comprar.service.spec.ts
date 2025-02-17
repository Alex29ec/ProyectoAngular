import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  private apiUrl = 'http://tuapi.com/compras'; // Cambia esto por la URL real de tu API

  constructor(private http: HttpClient) {}

  registrarCompra(producto: Producto): Observable<any> {
    const compra = {
      productoId: producto.id,
      usuarioId: 1, // Aquí debes obtener el ID del usuario autenticado
      fecha: new Date(),
      precio: producto.precio
    };
    return this.http.post(`${this.apiUrl}/crear`, compra);
  }
}
