import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  values: any;
  constructor(private searchservice: SearchService) { }

  ngOnInit(): void {
  }
  storeData(){
    this.values = this.searchservice.searchvalues;
  }
}
