import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';

import { ItemsService } from './services/items.service';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowsComponent } from './shows/shows.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieSingleComponent } from './movie-single/movie-single.component';
import { ShowSingleComponent } from './show-single/show-single.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ShowsComponent,
    NavigationComponent,
    ShowDetailsComponent,
    MovieDetailsComponent,
    MovieSingleComponent,
    ShowSingleComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [ ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
