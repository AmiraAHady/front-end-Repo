import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { FirstComponent } from './first/first.component';
import { MoviesComponent } from './movies/movies.component';
import { EventTestComponent } from './event-test/event-test.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';
// import { DummyComponent } from './dummy/dummy.component';
import { HeaderComponent } from './header/header.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { TvListComponent } from './tv-list/tv-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipePipe,
    FirstComponent,
    MoviesComponent,
    EventTestComponent,
    StarComponent,
    // DummyComponent,
    HeaderComponent,
    MoviesDetailsComponent,
    TvListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
