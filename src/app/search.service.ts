import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchvalues: any;
  constructor() { }

  getData(){
    return this.searchvalues;
  }
}
