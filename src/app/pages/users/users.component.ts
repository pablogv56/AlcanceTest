import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Petition } from '../petitions/interfaces/petition.interface';
import { PetitionService } from '../petitions/services/petition.service';
import { User } from './interfaces/user.interface';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!:User[];

  constructor(
    private usersSvc:UsersService,
    private petitionSvc:PetitionService) { }

  ngOnInit(): void {
    this.usersSvc.getUsers()
    .pipe( tap ((users:User[]) => 
    {
      this.users = users;
      let petition:Petition = 
      {
        id: "0",
        fecha: formatDate(new Date(),'yyyy-MM-dd','en-US'),
        metodoConsultado: "GET",        
        datos: JSON.stringify(users)
      };
      this.petitionSvc.postPetition(petition).subscribe();
    }) )
    .subscribe();
  }
}
