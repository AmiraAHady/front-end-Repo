import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor(private http:HttpClient) { }

  getAllMovies(pageNumber=1):Observable<any>{
    console.log(pageNumber);
    let pageQuery=`?page=${pageNumber}`
    return this.http.get(`http://localhost:3000/movies`+pageQuery)
  }

}
