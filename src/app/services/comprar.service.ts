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
    return this.http.post(`${this.apiUrl}`, compra);
  }
}
