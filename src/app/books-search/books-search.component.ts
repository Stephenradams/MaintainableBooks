import {Component} from '@angular/core';
import {BookSearchService} from './book-search.service';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent {

  listOfAuthors: Array<any>;
  showSearching;

  constructor(private bookSearchService: BookSearchService) {
  }

  bookSearch($event): void {
    this.showSearching = true;
    this.bookSearchService.searchForBooksByLastname($event).subscribe((result) => {
      console.log(result);
      this.showSearching = false;
      this.listOfAuthors = result.author;
    });
  }

  showTitleFullDetails(): void {

  }
}
