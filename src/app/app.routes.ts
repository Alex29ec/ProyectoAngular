import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { EditarProductoComponent } from './admin/editar-productos/editar-productos.component';
import { EditarUsuarioComponent } from './admin/editar-usuarios/editar-usuarios.component';
import { EditarComprasComponent } from './admin/editar-compras/editar-compras.component';
import { AnadirProductosComponent } from './admin/anadir-productos/anadir-productos.component';
import { AnadirMarcaComponent } from './admin/anadir-marcas/anadir-marcas.component';
import { EditarMarcaComponent } from './admin/editar-marcas/editar-marcas.component';

export const routes: Routes = [
  { path: '', component: CatalogoComponent },
  { path: 'detalle/:id', component: DetalleProductoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/editar-producto/:id', component: EditarProductoComponent },
  { path: 'admin/agregar-producto', component: AnadirProductosComponent },
  { path: 'admin/editar-usuario/:id', component: EditarUsuarioComponent },
  { path: 'admin/editar-compra/:id', component: EditarComprasComponent },
  { path: 'admin/anadir-marca', component: AnadirMarcaComponent },
  { path: 'admin/editar-marca/:id', component: EditarMarcaComponent},
];
