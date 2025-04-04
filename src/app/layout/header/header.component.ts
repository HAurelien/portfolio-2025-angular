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
    { label: '// home', link: '/' },
    { label: '// experience', link: '/skills' },
  ];

  constructor(private router: Router) {}

  navigateTo(link: string): void {
    this.router.navigateByUrl(link);
    
    if (this.isMenuOpen) {
      this.toggleMenu();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  goToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }
}
