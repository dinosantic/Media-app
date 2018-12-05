import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-show-single',
  templateUrl: './show-single.component.html',
  styleUrls: ['./show-single.component.css']
})

export class ShowSingleComponent implements OnInit {
  top_shows: any;
  shows: any;
  searchShow = new Subject<string>();

  constructor(public itemsService: ItemsService ) {
    // Get top rated shows
    this.itemsService.getTopRatedShows().subscribe(data => {
     this.top_shows = data['results'];
    });
    // Show search
    this.itemsService.searchSho(this.searchShow).subscribe(results => {
      this.shows = results['results'];
    });
  }

  ngOnInit() {
  }

}
