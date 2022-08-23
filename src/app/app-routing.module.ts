import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) 
  },
  { 
    path: 'posts/:userId', 
    loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule) 
  },
  { 
    path: 'posts', 
    loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule) 
  },
  { path: 'albums', loadChildren: () => import('./pages/albums/albums.module').then(m => m.AlbumsModule) },
  { path: 'petitions', loadChildren: () => import('./pages/petitions/petitions.module').then(m => m.PetitionsModule) },
  { path: 'edit-petition/:id', loadChildren: () => import('./pages/petitions/edit-petition/edit-petition.module').then(m => m.EditPetitionModule) },
  {path: '**', redirectTo: '', pathMatch: 'full'}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }