import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/shared/interfaces/selectOption.interface';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PetitionService } from '../services/petition.service';
import { Petition } from '../interfaces/petition.interface';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit-petition',
  templateUrl: './edit-petition.component.html',
  styleUrls: ['./edit-petition.component.css']
})
export class EditPetitionComponent implements OnInit {

  model=
  {
    id:'',
    fecha:new Date(),
    metodoConsulado:0,
    datos:''
  };

  private idPetition!:string;

  options:Option[] = [
    {id:0,name:'Seleccione uno'},
    {id:1,name:'GET'},
    {id:2,name:'POST'},
    {id:3,name:'PATCH'},
    {id:4,name:'DELETE'}
  ];

  constructor(
    private route:ActivatedRoute,
    private petitionSvc:PetitionService,
    private routeNav:Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.idPetition = String(routeParams.get('id'));
    this.petitionSvc.getPetition(this.idPetition)
    .subscribe( res =>{
      this.model.id = this.idPetition;
      this.model.fecha = new Date(res[0]['fecha']);
      this.model.datos = res[0]['datos'];
      let op = this.options.find(op => op.name.toString() == res[0]['metodoConsultado']);
      if(op)
      {
        this.model.metodoConsulado = op.id;
      }else
      {
        this.model.metodoConsulado = 0;
      }

      let petition:Petition = 
        {
          id: "0",
          fecha: formatDate(new Date(),'yyyy-MM-dd','en-US'),
          metodoConsultado: "GET",        
          datos: JSON.stringify(res[0])
        };
        this.petitionSvc.postPetition(petition).subscribe();
    });    
  }

  editPetition():void
  {
    let petition:Petition = 
    {
      id:this.idPetition,
      datos:this.model.datos,
      fecha:formatDate(this.model.fecha,'yyyy-MM-dd','en-US'),
      metodoConsultado:''
    };

    let op = this.options.find(op => op.id.toString() == this.model.id);
    if(op)
    {
      petition.metodoConsultado = op.name;
    }else
    {
      petition.metodoConsultado = '';
    }
    console.log(petition);
    this.petitionSvc.patchPetition(petition).subscribe((res) =>
    {
      this.routeNav.navigateByUrl('/petitions');
    });
  }

  metodoChangeAction(metodoConsulado:number):void
  {
    let dropDownData = this.options.find((data: any) => data.id === metodoConsulado);
    if (dropDownData) {
      this.model.id = dropDownData.id.toString();
    } else {
      this.model.id = 0+'';
    }
  }
}
