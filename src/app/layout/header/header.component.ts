import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent {
  isMenuOpen = false;
  
  menuItems = [
    { label: '// home', link: '/home-section' },
    { label: '// expertise', link: '/skills' },
    { label: '// work', link: '/work' },
    { label: '// experience', link: '/experience' },
    { label: '// contact', link: '/contact' }
  ];

  constructor(private router: Router) {}

  // Method to handle navigation
  navigateTo(link: string): void {
    this.router.navigateByUrl(link);
    if (this.isMenuOpen) {
      this.toggleMenu(); // Close the menu after navigation
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
