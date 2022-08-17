import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { PetitionsComponent } from '../pages/petitions/petitions.component';

const routes: Routes = [
  { 
    path: 'petitions', 
    loadChildren: () => import('./pages/petitions/petitions.module').then(m => m.PetitionsModule) 
  },
  { 
    path: 'users', 
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) 
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }