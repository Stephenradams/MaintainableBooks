import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksSearchComponent} from './books-search/books-search.component';

const routes: Routes = [{
  path: '',
  component: BooksSearchComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
