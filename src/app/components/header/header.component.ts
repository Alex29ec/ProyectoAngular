import { Component, NgModule, OnInit, Output ,EventEmitter} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BusquedaService } from '../../services/busqueda.service';

@Component({
  selector: 'app-header',
  standalone :true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule,FormsModule]
})


export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: string | null = null;
  userEmail: string | null = null;
  username: string | null = null;
  pais: string | null = null;
  sexo: string | null = null;
  constructor(private authService: AuthService,private router: Router,private busquedaService: BusquedaService) {}

  @Output() searchEvent = new EventEmitter<string>();
  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log('Texto ingresado:', inputElement.value);
    this.searchEvent.emit(inputElement.value);
  }
  
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userName = this.authService.getUserName();
    this.username = this.authService.getusername();
    this.userEmail = this.authService.getUserEmail();
    this.pais = this.authService.getpais();
    this.sexo = this.authService.getsexo();
  }

    buscar(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      this.busquedaService.actualizarBusqueda(inputElement.value);
    }  

  goToProfile(){
    this.router.navigate(['profile']);

  }

  logout(): void {
    this.authService.removeToken();
    this.isLoggedIn = false;
    this.userName = null;
    this.userEmail = null;
    this.username = null;
    this.pais = null;
    this.sexo =null;
    
  }
  onLogOut(){
    this.authService.logout();
    this.isLoggedIn = false;
    this.userName = '';
    this.router.navigate(['']);
  }

  getUsuarioNombre(): string | null {
    return this.authService.getUserName();
  }
}
