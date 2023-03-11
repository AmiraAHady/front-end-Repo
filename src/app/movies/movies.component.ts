import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { Imovie } from './Imovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies :Imovie[]= [];
  isDisable: boolean = false;
  private  _searchValue:string=''
  filterdMovie:Imovie[]=[];

  constructor(public moviesService:MoviesDataService) { }

  set searchvalue(val:string){
    this._searchValue=val;
    this.filterdMovie=this.searchMovies(val);
    
  }

  ngOnInit(): void {
    this.moviesService.addNewMovie('spiderman',"imagePath","action movie");
    this.moviesService.getValue("amira");
  }

  search():String{
   return 'Hello'
  }

 
  searchMovies(value:string){
    return this.movies.filter((mov)=>{
      // return mov.title.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    })
  }


}
