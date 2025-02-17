// src/app/productos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './models/producto.model';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  private apiUrl = 'http://localhost:8081/productos'; 
  constructor(private http: HttpClient) {} 

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}
