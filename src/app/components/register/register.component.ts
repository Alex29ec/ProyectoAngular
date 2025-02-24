import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule, CommonModule]
})
export class RegisterComponent {
  usuario = {
    nombre_completo: '',
    username: '',
    email: '',
    password: '',
    password2:'',
    sexo: '',
    pais: ''
  };
  
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    if(this.usuario.password==this.usuario.password2){
    this.http.post('http://localhost:8081/api/usuarios/registro', this.usuario).subscribe({
      next: (response) => {
        console.log('Registro exitoso:', response);
        this.successMessage = 'Usuario registrado correctamente. Redirigiendo...';
        this.errorMessage = '';

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (error) => {
        console.error('Error en registro:', error);
        this.errorMessage = 'Error al registrar usuario. Inténtalo de nuevo.';
        this.successMessage = '';
      }
    });
  }
  else{
  alert("Las contraseñas no son iguales");
  
  }
}
}
