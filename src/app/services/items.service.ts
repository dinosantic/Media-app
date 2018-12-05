import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ItemsService {
  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = 'a7bb6345770443b750d39029302ba271';

  constructor ( public http: HttpClient) { }

  // Movies
  // Search movies
  searchMov(terms: Observable<string>) {
    return terms
      .filter((text: string) => text.length > 2)
      .distinctUntilChanged()
      .switchMap(term => this.searchMovies(term));
  }
  searchMovies(term) {
    return this.http
        .get(this.movie_url + 'search/movie?query=' + term + '&api_key=' + this.api_key)
        .map(res => res);
  }
  // Get top rated movies
  getTopRatedMovies() {
    // tslint:disable-next-line:max-line-length
    return this.http.get(this.movie_url + 'movie/top_rated' + '?api_key=' + this.api_key);
  }
  // Get single movie
  getMovie(id: number) {
    return this.http.get(this.movie_url + 'movie/' + id + '?api_key=' + this.api_key);
  }

  // Shows
  // Search show
  searchSho(terms: Observable<string>) {
    return terms
      .filter((text: string) => text.length > 2)
      .distinctUntilChanged()
      .switchMap(term => this.searchShows(term));
  }
  searchShows(term) {
    return this.http
        .get(this.movie_url + 'search/tv?query=' + term + '&api_key=' + this.api_key)
        .map(res => res);
  }
  // Get top rated show
    getTopRatedShows() {
      // tslint:disable-next-line:max-line-length
      return this.http.get(this.movie_url + 'tv/top_rated' + '?api_key=' + this.api_key);
    }
    getShows(id: number) {
      return this.http.get(this.movie_url + 'tv/' + id + '?api_key=' + this.api_key);
    }
  }

