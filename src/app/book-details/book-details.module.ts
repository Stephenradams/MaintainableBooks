import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RouterModule, Routes } from '@angular/router';
import { BooksSearchComponent } from '../books-search/books-search.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [BookDetailsComponent],
  exports: [
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
  ]
})
export class BookDetailsModule { }
