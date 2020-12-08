import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BookSearchService } from './book-search.service';

describe('BookSearchService', () => {
  let service: BookSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(BookSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
