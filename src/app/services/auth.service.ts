import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(response: any): void {
    if (response && response.email && typeof window !== 'undefined') {
      localStorage.setItem('userEmail', response.email);
      localStorage.setItem('userName', response.nombre_completo);
      localStorage.setItem('username',response.username),
      localStorage.setItem('pais',response.pais),
      localStorage.setItem('sexo',response.sexo),
      localStorage.setItem('token', response.token);
      localStorage.setItem('rol', response.rol);
      localStorage.setItem('userId', response.id);
    }
  }

  removeToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  }

  logout(): void {
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userName');
      localStorage.removeItem('pais');
      localStorage.removeItem('sexo');
      localStorage.removeItem('rol');
      localStorage.removeItem('username');
      localStorage.removeItem('token');
  }
   getUserId(): number | null {
    const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
    return userId ? parseInt(userId, 10) : null;
  }
  guardardatosparalogin(response: any):void{
    localStorage.setItem('email', response.email);
    localStorage.setItem('contrasena', response.contraseña);
  }
  isLoggedIn(): boolean {
    return typeof window !== 'undefined' && !!localStorage.getItem('token');
  }

  getUserName(): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem('userName') : null;
  }

  getUserEmail(): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem('userEmail') : null;
  }

  getRol(): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem('rol') : null;
  }

  getpais(): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem('pais') : null;
  }

  getusername(): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem('username') : null;
  }
  getsexo(): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem('sexo') : null;
  }
  
}
