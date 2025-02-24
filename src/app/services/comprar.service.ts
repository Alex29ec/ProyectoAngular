import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  private apiUrl = 'http://localhost:8081/compras';

  constructor(private http: HttpClient, private authService: AuthService) {}
  
  registrarCompra(producto: Producto): Observable<any> {
    const compra = {
      productoId: producto.id,
      usuarioId: this.authService.getUserId(),
      total: producto.precio
    };
  
    return new Observable((observer) => {
      // 1. Registrar la compra
      this.http.post(`${this.apiUrl}`, compra).subscribe({
        next: () => {
          // 2. Reducir el stock
          this.reducirStock(producto.id).subscribe({
            next: () => {
              observer.next('Compra realizada y stock actualizado');
              observer.complete();
            },
            error: (error) => {
              console.error('Error al actualizar stock:', error);
              observer.error('Error al actualizar el stock');
            },
          });
        },
        error: (error) => {
          console.error('Error al registrar compra:', error);
          observer.error('Error al registrar la compra');
        }
      });
    });
  }
  
  private reducirStock(productoId: number): Observable<any> {
    return this.http.put(`http://localhost:8081/productos/${productoId}/reducir-stock`, {});
  }
  
}
