import { Component, Input} from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
  @Input() user!:User;

  constructor(private router:Router) { }
  
  onClick(): void
  {
    this.router.navigate(['/posts']);
  }
}
