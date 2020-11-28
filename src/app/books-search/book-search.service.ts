import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  constructor(private http: HttpClient) {
  }

  static getUrlPath(): string {
    return environment.baseUrl;
  }


  searchForBooksByLastname(authorLastname: string): Observable<any> {
    console.log(BookSearchService.getUrlPath());
    const searchUrl = BookSearchService.getUrlPath() + 'authors?lastName=' + authorLastname;
    return this.http.get(searchUrl);
  }
}
