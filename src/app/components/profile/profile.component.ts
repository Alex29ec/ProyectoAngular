import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [NgIf, NgFor]
})
export class ProfileComponent implements OnInit {
  private http = inject(HttpClient);
  
  userName: string | null = '';
  username: string | null = '';
  pais: string | null = '';
  sexo: string | null = '';
  userEmail: string | null = '';
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  compras: any[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userName = this.authService.getUserName();
    this.userEmail = this.authService.getUserEmail();
    this.username = this.authService.getusername();
    this.pais = this.authService.getpais();
    this.sexo = this.authService.getsexo();

    // Comprobar si el usuario tiene rol 'admin'
    const rol = localStorage.getItem('rol');
    if (rol === 'ADMIN') {
      this.isAdmin = true;
    }
    
    if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.obtenerCompras();
    }
  }

  obtenerCompras(): void {
    const userId = this.authService.getUserId();  
    this.http.get<any[]>(`http://localhost:8081/compras/usuario/${userId}`).subscribe({
      next: (data) => {
        this.compras = data;
      },
      error: (error) => {
        console.error('Error al obtener las compras:', error);
      }
    });
  }

  onLogOut() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.userName = '';
    this.router.navigate(['']);
  }

  goToAdminPage() {
    this.router.navigate(['/admin']);
  }
}
