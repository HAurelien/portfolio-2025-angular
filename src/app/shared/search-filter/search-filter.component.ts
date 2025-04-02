import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  @Input() categoryList: string[] = [];
  @Input() baseFilter: string[] = [];
  @Output() searchQueryChanged = new EventEmitter<string>();
  @Output() categoriesChanged = new EventEmitter<string[]>();

  ngOnInit(): void {
    if(this.baseFilter.length > 0){
      console.log(this.baseFilter)
      this.selectedCategories = this.baseFilter
      this.onSearchChange()
    }
  }
  
  searchQuery: string = '';
  selectedCategories: string[] = [];
  isFilterMenuOpen: boolean = false;

  onSearchChange(): void {
    this.searchQueryChanged.emit(this.searchQuery);
  }

  toggleCategory(category: string, event: Event): void {
    const checkbox = (event.target as HTMLInputElement);
    let updatedSelectedCategories = [...this.selectedCategories];
    console.log(updatedSelectedCategories)

    if (checkbox.checked) {
      updatedSelectedCategories.push(category);
    } else {
      updatedSelectedCategories = updatedSelectedCategories.filter(item => item !== category);
    }

    this.selectedCategories = updatedSelectedCategories;
    this.categoriesChanged.emit(this.selectedCategories);
  }

  toggleFilterMenu(): void {
    this.isFilterMenuOpen = !this.isFilterMenuOpen;
  }
}
