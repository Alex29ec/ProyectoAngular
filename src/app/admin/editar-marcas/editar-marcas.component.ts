import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-marcas',
  templateUrl: './editar-marcas.component.html',
  styleUrls: ['./editar-marcas.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class EditarMarcaComponent implements OnInit {
  marca = {
    id: 0,
    nombre: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.http.get(`http://localhost:8081/marcas/${id}`).subscribe((data: any) => {
      this.marca = data;
    });
  }

  editarMarca(): void {
    this.http.put(`http://localhost:8081/marcas/${this.marca.id}`, this.marca).subscribe({
      next: () => {
        alert('Marca actualizada correctamente');
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        console.error('Error al actualizar la marca:', error);
        alert('Hubo un error al actualizar la marca');
      }
    });
  }
}
