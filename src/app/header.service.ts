import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  // Creamos un BehaviorSubject para emitir el estado de la cabecera
  private showHeaderSource = new BehaviorSubject<boolean>(true);
  showHeader$ = this.showHeaderSource.asObservable();

  constructor() {}

  // Método para cambiar el estado de la cabecera
  toggleHeader(): void {
    this.showHeaderSource.next(!this.showHeaderSource.value); // Cambia el estado
  }
}
