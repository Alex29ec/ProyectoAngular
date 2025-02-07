import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  username: string = 'Juan Pérez';
  searchQuery: string = '';

  constructor() { }
}
