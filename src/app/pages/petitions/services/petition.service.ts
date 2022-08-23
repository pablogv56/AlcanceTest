import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Petition } from '../interfaces/petition.interface';

@Injectable({
  providedIn: 'root'
})
export class PetitionService {

  private apiURL = 'http://localhost/petitions';

  constructor(private http:HttpClient) { }

  getPetitions():Observable<Petition[]>
  {
    return this.http.get<Petition[]>(this.apiURL+'/');
  }

  getPetition(id:string):Observable<Petition[]>
  {
    return this.http.get<Petition[]>(this.apiURL+'/?consult='+id);
  }

  postPetition(petition:Petition):Observable<any>
  {
    return this.http.post(this.apiURL+'/?insert=1',petition);
  }

  patchPetition(petition:any):Observable<any>
  {
    return this.http.post(this.apiURL+'/?patch='+petition.id,petition);
  }

  deletePetition(id:string):Observable<any>
  {
    return this.http.get(this.apiURL+'/?delete='+id);
  }
}
