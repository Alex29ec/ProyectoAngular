import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class BusquedaService {
  private busquedaSubject = new BehaviorSubject<string>(''); 
  busqueda$ = this.busquedaSubject.asObservable(); 

  actualizarBusqueda(texto: string) {
    this.busquedaSubject.next(texto); 
  }
}
