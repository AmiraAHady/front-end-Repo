import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesDataService } from '../movies-data.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
   singleMovie={}
  constructor(private moviesServ:MoviesDataService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id');
    this.moviesServ.getMovieById(id!).subscribe({next:(movie)=>{
      this.singleMovie=movie;
      console.log(movie);
      
    }})
  }

}
