import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Petition } from './interfaces/petition.interface';
import { PetitionService } from './services/petition.service';

@Component({
  selector: 'app-petitions',
  templateUrl: './petitions.component.html',
  styleUrls: ['./petitions.component.css']
})
export class PetitionsComponent implements OnInit {

  petitions!:Petition[];

  displayedColumns = ['id','fecha','metodoConsultado','datos','options'];

  constructor(
    private petitionsSvc:PetitionService,
    private router:Router) { }

  ngOnInit(): void {
    this.petitionsSvc.getPetitions()
    .pipe(tap((petitions:Petition[]) =>  this.petitions = petitions))
    .subscribe();
  }

  editClick(id:number)
  {
    this.router.navigateByUrl('edit-petition/'+id);
  }

  deleteClick(petition:Petition)
  {
    if(confirm("¿Esta seguro que quiere borrar la peticion?")) {
      this.petitionsSvc.deletePetition(petition.id).subscribe((res)=>
      {
        let index = this.petitions.indexOf(petition);
        this.petitions.splice(index,1);
        this.router.navigateByUrl('/petitions');
      });
    }
  }
}
