import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { ShowsComponent } from './shows/shows.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'shows', pathMatch: 'full' },
  { path: 'shows', component: ShowsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:movieID', component: MovieDetailsComponent },
  { path: 'show/:showID', component: ShowDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
