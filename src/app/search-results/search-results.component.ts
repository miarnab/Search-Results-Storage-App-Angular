import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searches: any;
  constructor(private searchservice: SearchService) { }

  ngOnInit(): void {
    this.searches = this.searchservice.getData();
  }

}
