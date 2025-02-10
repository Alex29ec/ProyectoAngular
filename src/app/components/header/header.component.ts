import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports:[CommonModule]
})

export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: string | null = null;
  userEmail: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userName = this.authService.getUserName();
    this.userEmail = this.authService.getUserEmail();
  }

  logout(): void {
    this.authService.removeToken();
    this.isLoggedIn = false;
    this.userName = null;
    this.userEmail = null;
  }
  onLogOut(){
    this.authService.logout();
  }
  getUsuarioNombre(): string | null {
    return this.authService.getUserName();
  }
  
}
