import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Author} from '../models/Author';

interface SearchResult {
  uri?: string;
  author: Array<Author>;
}

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  constructor(private http: HttpClient) {
  }

  static getUrlPath(): string {
    return environment.baseUrl;
  }


  searchForBooksByLastname(authorLastname: string): Observable<SearchResult> {
    const searchUrl = BookSearchService.getUrlPath() + 'authors?lastName=' + authorLastname;
    return this.http.get<SearchResult>(searchUrl);
  }
}
