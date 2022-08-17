import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetitionsRoutingModule } from './petitions-routing.module';
import { PetitionsComponent } from './petitions.component';
import { PetitionComponent } from './petition/petition.component';
import { MaterialModule } from '../../../app/material.module';


@NgModule({
  declarations: [
    PetitionsComponent,
    PetitionComponent
  ],
  imports: [
    CommonModule,
    PetitionsRoutingModule,
    MaterialModule
  ]
})
export class PetitionsModule { }
