import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Petition } from './interfaces/petition.interface';
import { PetitionsService } from './services/petitions.service';

@Component({
  selector: 'app-petitions',
  templateUrl: './petitions.component.html',
  styleUrls: ['./petitions.component.css']
})
export class PetitionsComponent implements OnInit {

  petitions:Petition[] = [];
  columnsToDisplay = ['id','title','userId','body'];

  constructor(private petitionSvc:PetitionsService) { }

  ngOnInit(): void {
    this.petitionSvc.getPetitions()
    .pipe(tap((petitions:Petition[]) => this.petitions = petitions))
    .subscribe();
  }

}
