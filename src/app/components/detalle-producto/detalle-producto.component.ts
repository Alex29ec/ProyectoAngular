import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

  producto: any = {};

  constructor(private route: ActivatedRoute, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.producto = navigation?.extras.state?.['producto'];

    if (!this.producto) {
      const id = this.route.snapshot.paramMap.get('id');
      console.log(`Producto con ID ${id} no encontrado en la navegación.`);
      // Aquí puedes hacer una petición a la API si ya tienes el backend en Spring Boot.
    }
  }
}
