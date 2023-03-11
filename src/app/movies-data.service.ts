import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor(private http:HttpClient) { }

  public getValue(){
    return 'Sample value';
  }

  getMovieById(movieId:string){
    return this.http.get(`http://localhost:3000/movies/${movieId}`)
  }
}
