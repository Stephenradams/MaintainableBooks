import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Output()
  searchForBooks: EventEmitter<any> = new EventEmitter<any>();

  searchFormField = new FormControl('', [
    Validators.required
  ]);

  constructor() {
  }

  ngOnInit(): void {
  }

  booksSearch(): void {
    console.log(this.searchFormField.value);
    this.searchForBooks.emit(this.searchFormField.value);
  }
}
