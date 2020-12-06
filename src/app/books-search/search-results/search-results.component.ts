import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  @Input() resultsToDisplay: Array<any>;
  @Output() showTitleFullDetails: EventEmitter<any> = new EventEmitter<any>();

  showFullDetails(): void {
    this.showTitleFullDetails.emit();
  }

}
