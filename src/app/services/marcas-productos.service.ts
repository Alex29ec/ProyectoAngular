import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  // Obtener marcas de un producto por su ID
  obtenerMarcasDeProducto(productoId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/marcas/producto/${productoId}`);
  }
  obtenerProductoPorId(id: number): Observable<any> {
    return this.http.get(`http://localhost:8081/productos/${id}`);
  }
  
}
