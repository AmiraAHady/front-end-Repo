import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  getTVShows():Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=38e52bad77ebe70a2fa84bd0e6051118&language=en-US&page=1`)
  }

  addNewMovie(mtitle:string,path:string,content:string){
    let newMovie={
      title:mtitle,
      overView:content,
      imgPath:path
    }
    this.http.post(`http://localhost:3000/addMovie`,newMovie).subscribe()
  }
}
