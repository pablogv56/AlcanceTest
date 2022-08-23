import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetitionsRoutingModule } from './petitions-routing.module';
import { PetitionsComponent } from './petitions.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    PetitionsComponent
  ],
  imports: [
    CommonModule,
    PetitionsRoutingModule,
    MaterialModule
  ]
})
export class PetitionsModule { }
