import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) 
  },
  { 
    path: 'posts', 
    loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule) 
  },
  { path: 'albums', loadChildren: () => import('./pages/albums/albums.module').then(m => m.AlbumsModule) },
  {path: '**', redirectTo: '', pathMatch: 'full'}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }