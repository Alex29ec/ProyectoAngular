import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: CatalogoComponent },
  { path: 'detalle/:id', component: DetalleProductoComponent },
  { path: 'login', component: LoginComponent }

];
