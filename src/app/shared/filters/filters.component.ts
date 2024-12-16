import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filters',
  standalone: false,
  
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  @Output() search = new EventEmitter<string>();
  @Output() statusChange = new EventEmitter<string>();

  searchTerm: string = '';
  selectedStatus: string = '';

  onSearch(form: NgForm) {
    this.search.emit(form.value.searchItem);
    console.log(form.value.searchItem);
    
  }

  onStatusChange(form:NgForm) {
    this.statusChange.emit(form.value.status);
    console.log(form.value.status);
    
  }
}
