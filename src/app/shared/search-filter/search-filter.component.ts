import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent {
  @Input() categoryList: string[] = [];
  @Output() searchQueryChanged = new EventEmitter<string>();
  @Output() categoriesChanged = new EventEmitter<string[]>();

  searchQuery: string = '';
  selectedCategories: string[] = [];
  isFilterMenuOpen: boolean = false;

  // Update search query
  onSearchChange(): void {
    this.searchQueryChanged.emit(this.searchQuery);
  }

  // Toggle category selection
  toggleCategory(category: string, event: Event): void {
    const checkbox = (event.target as HTMLInputElement);
    let updatedSelectedCategories = [...this.selectedCategories];

    if (checkbox.checked) {
      updatedSelectedCategories.push(category);
    } else {
      updatedSelectedCategories = updatedSelectedCategories.filter(item => item !== category);
    }

    this.selectedCategories = updatedSelectedCategories;
    this.categoriesChanged.emit(this.selectedCategories);
  }

  // Toggle filter menu visibility
  toggleFilterMenu(): void {
    this.isFilterMenuOpen = !this.isFilterMenuOpen;
  }
}
