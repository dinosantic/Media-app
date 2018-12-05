import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  movie: any;

  constructor(private router: ActivatedRoute, private itemsService: ItemsService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['movieID'];
      this.itemsService.getMovie(id).subscribe(data => {
      this.movie = data;
      });
    });
  }
}

