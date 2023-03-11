import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';

@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.css'],
})
export class TvListComponent implements OnInit {
  tvshows:any[]=[]
  constructor(private tvservice:MoviesDataService) { }

  ngOnInit(): void {
   this.tvservice.getTVShows().subscribe({next:(tvs)=>{
     this.tvshows=tvs.results;
     
   }})
  }

}
