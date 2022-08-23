import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private apiURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }
  
  getUsers():Observable<User[]>
  {
    return this.http.get<User[]>(this.apiURL);
  }
}
