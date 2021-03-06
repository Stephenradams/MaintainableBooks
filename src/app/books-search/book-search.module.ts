import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksSearchComponent} from './books-search.component';
import {SearchFormComponent} from './search-form/search-form.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {SearchResultsComponent} from './search-results/search-results.component';
import {SearchingComponent} from './searching/searching.component';
import {RouterModule, Routes} from '@angular/router';
import { BookDetailsModule } from '../book-details/book-details.module';


const routes: Routes = [
  {
    path: '',
    component: BooksSearchComponent
  }
];

@NgModule({
  declarations: [
    BooksSearchComponent,
    SearchFormComponent,
    SearchResultsComponent,
    SearchingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    RouterModule.forChild(routes),
    BookDetailsModule
  ],
  exports: [
    RouterModule
  ]
})
export class BookSearchModule {
}
