import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-anadir-marca',
  templateUrl: './anadir-marcas.component.html',
  styleUrls: ['./anadir-marcas.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class AnadirMarcaComponent {
  marca = {
    nombre: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  anadirMarca(): void {
    this.http.post('http://localhost:8081/marcas', this.marca).subscribe({
      next: () => {
        alert('Marca añadida correctamente');
        this.router.navigate(['/admin']);  
      },
      error: (error) => {
        console.error('Error al añadir la marca:', error);
        alert('Hubo un error al añadir la marca');
      }
    });
  }
}
