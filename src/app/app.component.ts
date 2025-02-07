import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, FooterComponent,RouterModule,CatalogoComponent], // Asegúrate de incluir CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'ProyectoAngular';
  constructor(private productosService: ProductosService) {
    // Puedes usar el servicio aquí
  }
}
