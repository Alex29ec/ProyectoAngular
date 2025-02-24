import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Producto } from '../../models/producto.model';
import { ProductosService } from '../../productos.service';
import { BusquedaService } from '../../services/busqueda.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  imports: [NgFor, RouterModule],
})
export class CatalogoComponent implements OnInit {
  videojuegos: Producto[] = [];
  filteredProducts: Producto[] = [];
  @ViewChild('catalogoContainer', { read: ViewContainerRef }) catalogoContainer!: ViewContainerRef;

  constructor(private router: Router, private api: ProductosService,private busquedaService: BusquedaService  ) {}

  ngOnInit(): void {
    this.api.getProductos().subscribe((data) => {
      this.videojuegos = data;
      this.filteredProducts = data; 
    });
    this.busquedaService.busqueda$.subscribe((texto) => {
      this.filtrarProductos(texto);
    });
  }

  filtrarProductos(texto: string) {
    this.filteredProducts = this.videojuegos.filter((producto) =>
      producto.nombre.toLowerCase().includes(texto.toLowerCase())
    );
  }

  verDetalles(id: number) {
    const producto = this.videojuegos.find((p) => p.id === id);
    if (producto) {
      this.router.navigate(['/detalle', id], { state: { producto } });
    }
  }

  onSearch(searchTerm: string) {
    console.log('Filtrando productos con:', searchTerm);
    this.filteredProducts = this.videojuegos.filter(producto =>
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
