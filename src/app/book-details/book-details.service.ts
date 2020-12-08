import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {

  bookDetailsUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }


  getBookDetails(authorLastname: string): Observable<any> {
    const path = this.bookDetailsUrl + 'works/?start=0&max=3&expandLevel=1&search=' + authorLastname;
    return this.http.get(path);
  }
}
