import { Component, Input, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  
  @Input() items: { image: string, title: string, link: string }[] = [];
  @Input() loop_ms: number = 0;
  @Input() display_left_right = true;
  @Input() width!: string
  @Input() height!: string
  loop_id: any;

  currentIndex = 0;
  dots = new Array(this.items.length);

  @ViewChild('carouselContainer') carouselContainer: any;

  constructor() { }

  ngOnInit(): void {
    this.dots = new Array(this.items.length);

    if(this.loop_ms > 0){
      this.loop_id = setInterval(() => {
        this.navigate('next');
      }, this.loop_ms);
    }
  }

  ngAfterViewInit(): void {
    // After the view is initialized, calculate the largest image and set the container size
    this.setLargestImageSize();
  }

  ngOnDestroy(): void {
    if (this.loop_id) {
      clearInterval(this.loop_id);
    }
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

  // Function to set the carousel container size to the largest image
  setLargestImageSize(): void {
    const images = this.carouselContainer.nativeElement.querySelectorAll('img');
    let maxHeight = 0;

    // Find the largest image by comparing width and height
    images.forEach((img: HTMLImageElement) => {
      const height = img.naturalHeight;

      if (height > maxHeight) maxHeight = height;
    });

    // Apply the largest image dimensions to the carousel container
    const container = this.carouselContainer.nativeElement;
    const rect = container.getBoundingClientRect()

    container.style.height = this.height;
    container.style.width = this.width;
  }
}
