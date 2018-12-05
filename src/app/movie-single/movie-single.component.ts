import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.css']
})
export class MovieSingleComponent implements OnInit {
  top_movies: any;
  movies: any;
  searchMovie = new Subject<string>();

  constructor(public itemsService: ItemsService ) {
    // Get top rated movies
    this.itemsService.getTopRatedMovies().subscribe(data => {
      this.top_movies = data['results'];
    });
   // Movie search
    this.itemsService.searchMov(this.searchMovie).subscribe(results => {
      this.movies = results['results'];
      });
  }

  ngOnInit() {
  }

}
