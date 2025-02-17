import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  title = 'ProyectoAngular';
  
  filtrarProductos(texto: string) {
    console.log('Texto ingresado:', texto);
  }
}
