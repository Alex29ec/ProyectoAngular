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
      localStorage.setItem('token', response.token);
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
      localStorage.removeItem('token');
    
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


}
