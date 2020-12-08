import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'search',
  loadChildren: () => import('./books-search/book-search.module').then(m => m.BookSearchModule)
}, {
  path: 'book-details',
  loadChildren: () => import('./book-details/book-details.module').then(m => m.BookDetailsModule)
},
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
