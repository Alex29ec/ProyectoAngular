import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';  // Importamos el servicio

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  pais:string ='';
  username:string ='';
  sexo:string ='';
  usuarioNombre: string | null = null;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  onLogOut(){
    this.authService.logout();
  }

  public onSubmit() {
    const loginData = { email: this.email, password: this.password };

    this.http.post<{ nombre_completo: string, email: string, id: number }>(
      'http://localhost:8081/api/usuarios/login',
      loginData
    ).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        this.authService.login(response);
        this.usuarioNombre = response.nombre_completo;
        this.errorMessage = '';
        this.router.navigate(['/']);
      },
      
      error: (error) => {

        console.error('Error en login:', error);
        this.router.navigate(['/registro']);

        this.errorMessage = 'Email o contraseña incorrectos';
      }
    });
    this.router.navigate(['']);
  }
}
