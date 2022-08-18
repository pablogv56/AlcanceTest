import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { User } from './interfaces/user.interface';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!:User[];

  constructor(private usersSvc:UsersService) { }

  ngOnInit(): void {
    this.usersSvc.getPetitions()
    .pipe( tap ((users:User[]) => this.users = users) )
    .subscribe();
  }
}
