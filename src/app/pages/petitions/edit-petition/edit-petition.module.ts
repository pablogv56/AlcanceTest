import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPetitionRoutingModule } from './edit-petition-routing.module';
import { EditPetitionComponent } from './edit-petition.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditPetitionComponent
  ],
  imports: [
    CommonModule,
    EditPetitionRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class EditPetitionModule { }
