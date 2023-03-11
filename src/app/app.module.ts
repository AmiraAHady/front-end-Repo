import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { FirstComponent } from './first/first.component';
import { MoviesComponent } from './movies/movies.component';
import { EventTestComponent } from './event-test/event-test.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipePipe,
    FirstComponent,
    MoviesComponent,
    EventTestComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
