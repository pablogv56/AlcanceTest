import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.interface';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private apiURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }
  
  getPetitions():Observable<User[]>
  {
    return this.http.get<User[]>(this.apiURL);
  }
}
