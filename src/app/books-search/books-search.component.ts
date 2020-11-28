import {Component, OnInit} from '@angular/core';
import {BookSearchService} from './book-search.service';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent implements OnInit {

  listOfAuthors: Array<any>;
  showSearching;

  constructor(private bookSearchService: BookSearchService) {
  }

  ngOnInit(): void {
  }


  bookSearch($event): void {
    console.log($event);
    this.showSearching = true;
    this.bookSearchService.searchForBooksByLastname($event).subscribe((result) => {
      console.log(result.author);
      this.showSearching = false;
      this.listOfAuthors = result.author;
    });
  }


}
