import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BookDetailsService } from './book-details.service';

describe('BookDetailsService', () => {
  let service: BookDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(BookDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
