import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Author } from '../../models/Author';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  @Input() resultsToDisplay: Array<Author>;
  @Output() showTitleFullDetails: EventEmitter<any> = new EventEmitter<any>();

  showFullDetails(authorLastname: string): void {
    this.showTitleFullDetails.emit(authorLastname);
  }

}
