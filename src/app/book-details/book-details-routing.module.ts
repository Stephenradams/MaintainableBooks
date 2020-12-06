import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BookDetailsComponent} from './book-details/book-details.component';

const routes: Routes = [
  {
    path: 'book-details',
    component: BookDetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BookDetailsRoutingModule {
}
