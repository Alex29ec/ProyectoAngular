import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class EditarUsuarioComponent implements OnInit {
  usuario: any = {
    nombre_completo: '',
    email: '',
    pais: '',
    sexo: '',
    username: ''
  };

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const usuarioId = this.route.snapshot.params['id'];
    this.http.get<any>(`http://localhost:8081/api/usuarios/${usuarioId}`).subscribe({
      next: (data) => this.usuario = data,
      error: (error) => console.error('Error al obtener usuario:', error)
    });
  }

  onSubmit(): void {
    const usuarioId = this.route.snapshot.params['id'];
    this.http.put(`http://localhost:8081/api/usuarios/${usuarioId}`, this.usuario).subscribe({
      next: () => this.router.navigate(['/admin']),
      error: (error) => console.error('Error al actualizar usuario:', error)
    });
  }
}
