import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetitionsComponent } from './petitions.component';

const routes: Routes = [{ path: '', component: PetitionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetitionsRoutingModule { }
