import { Component, OnDestroy } from '@angular/core';
import { BookSearchService } from './book-search.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Author } from '../models/Author';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent implements OnDestroy {

  listOfAuthors: Array<Author>;
  showSearching;
  chosenAuthorId: string;

  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private bookSearchService: BookSearchService) {
  }

  bookSearch($event): void {
    this.showSearching = true;
    this.bookSearchService.searchForBooksByLastname($event).pipe(
      takeUntil(this.onDestroy$)
    ).subscribe((result) => {
      this.showSearching = false;
      this.listOfAuthors = result.author;
    });
  }

  showTitleFullDetails(authorId): void {
    this.chosenAuthorId = authorId;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.unsubscribe();
  }
}
