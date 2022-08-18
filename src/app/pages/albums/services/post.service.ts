import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../interfaces/album.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL='https://jsonplaceholder.typicode.com/albums';
  albums!:Album;

  constructor(private http:HttpClient) { }

  getAlbums():Observable<Album[]>
  {
    return this.http.get<Album[]>(this.apiURL);
  }
}
