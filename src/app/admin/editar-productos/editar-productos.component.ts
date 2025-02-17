import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class EditarProductoComponent implements OnInit {
  producto: any = {
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    tipo: '',
    imagen: ''
  };

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const productoId = this.route.snapshot.params['id'];
    this.http.get<any>(`http://localhost:8081/productos/${productoId}`).subscribe({
      next: (data) => this.producto = data,
      error: (error) => console.error('Error al obtener producto:', error)
    });
  }

  onSubmit(): void {
    const productoId = this.route.snapshot.params['id'];
    this.http.put(`http://localhost:8081/productos/${productoId}`, this.producto).subscribe({
      next: () => this.router.navigate(['/admin']),
      error: (error) => console.error('Error al actualizar producto:', error)
    });
  }
}
