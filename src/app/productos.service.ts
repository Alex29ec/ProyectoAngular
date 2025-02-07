// src/app/productos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'http://localhost:8081/api/productos';  // URL de tu backend

  constructor(private http: HttpClient) {}  // Inyectamos HttpClient

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);  // Realizamos la llamada HTTP GET
  }
}
