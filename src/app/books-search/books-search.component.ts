import { Component, OnInit } from '@angular/core';
import {BookSearchService} from './book-search.service';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent implements OnInit {

  constructor(private bookSearchService: BookSearchService) { }

  ngOnInit(): void {
  }



}
