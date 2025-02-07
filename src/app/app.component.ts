import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppHttpModule } from './app-http.module';
import { CatalogoComponent } from './components/catalogo/catalogo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHttpModule,HeaderComponent, FooterComponent,RouterModule,CatalogoComponent], // Asegúrate de incluir CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'ProyectoAngular';
}
