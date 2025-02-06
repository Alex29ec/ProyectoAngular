import { Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';

export const routes: Routes = [
  { path: '', component: CatalogoComponent }, // Página principal con la lista de productos
  { path: 'producto/:id', component: DetalleProductoComponent }, // Página de detalles de producto
];