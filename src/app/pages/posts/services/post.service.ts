import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interfase';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]>
  {
    return this.http.get<Post[]>(this.apiURL);
  }
}
