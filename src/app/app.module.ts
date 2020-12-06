import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BookSearchModule} from './books-search/book-search.module';
import {BookDetailsModule} from './book-details/book-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BookSearchModule,
    BookDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
