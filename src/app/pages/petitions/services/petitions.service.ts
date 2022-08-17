import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Petition } from '../interfaces/petition.interface';

@Injectable({
  providedIn: 'root' //ya no es necesario proveer el servicio en app.module
})
export class PetitionsService {
  private apiURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getPetitions():Observable<Petition[]>
  {
    return this.http.get<Petition[]>(this.apiURL);
  }

}
