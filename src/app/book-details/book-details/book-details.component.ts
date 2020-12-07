import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BookDetailsService } from '../book-details.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Works } from '../../models/Works';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnChanges, OnDestroy {
  @Input() authorId: string;

  public showResults = false;
  private onDestroy$: Subject<void> = new Subject<void>();
  private worksResult: Array<Works>;

  constructor(private bookDetailsService: BookDetailsService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.authorId.currentValue !== undefined) {
      const authorId = changes.authorId.currentValue;
      this.bookDetailsService.getBookDetails(authorId).pipe(
        takeUntil(this.onDestroy$)
      ).subscribe(results => {
        this.worksResult = results.work;
        this.showResults = true;
      });
    }

  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.unsubscribe();
  }

}
