import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  show: any;

  constructor(private router: ActivatedRoute, private itemsService: ItemsService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['showID'];
      this.itemsService.getShows(id).subscribe(data => {
      this.show = data;
      });
    });
    }
  }
