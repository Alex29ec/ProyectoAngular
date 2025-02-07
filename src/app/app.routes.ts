import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';

export const routes: Routes = [
  { path: '', component: CatalogoComponent },
  { path: 'detalle/:id', component: DetalleProductoComponent },
];
