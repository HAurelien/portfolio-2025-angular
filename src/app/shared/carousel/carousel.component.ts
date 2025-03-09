import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  
  // Accept 'items' as input from parent component
  @Input() items: { image: string, title: string, link: string }[] = [];
  
  // Tracks the current index in the carousel
  currentIndex = 0;
  
  // Define the dots based on number of items
  dots = new Array(this.items.length);
  
  constructor() { }
  
  ngOnInit(): void {
    // Initialize dots whenever items change
    this.dots = new Array(this.items.length);
  }
  
  // Function to handle the carousel navigation
  navigate(direction: 'prev' | 'next'): void {
    if (direction === 'prev') {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    } else {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    }
  }
  
  // Function to select a specific carousel item by dot click
  selectItem(index: number): void {
    this.currentIndex = index;
  }
}
