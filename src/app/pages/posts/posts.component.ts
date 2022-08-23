import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Petition } from '../petitions/interfaces/petition.interface';
import { PetitionService } from '../petitions/services/petition.service';
import { Post } from './interfaces/post.interfase';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts!:Post[];
  userId!:string;
  columnsToDisplay = ['id','userId','title','body'];

  constructor(
    private postsSvc:PostService,
    private petitionSvc:PetitionService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.userId = String(routeParams.get('userId'));
    if(this.userId !== 'null')
    {
      this.postsSvc.getPost(this.userId)
      .pipe(tap ( (posts:Post[]) => 
      {
        this.posts = posts;
        let petition:Petition = 
        {
          id: "0",
          fecha: formatDate(new Date(),'yyyy-MM-dd','en-US'),
          metodoConsultado: "GET",        
          datos: JSON.stringify(posts)
        };
        this.petitionSvc.postPetition(petition).subscribe();
      }))
      .subscribe();
      
    }else
    {
      this.postsSvc.getPosts()
      .pipe(tap ( (posts:Post[]) => 
      {
        this.posts = posts;
        let petition:Petition = 
        {
          id: "0",
          fecha: formatDate(new Date(),'yyyy-MM-dd','en-US'),
          metodoConsultado: "GET",        
          datos: JSON.stringify(posts)
        };
        this.petitionSvc.postPetition(petition).subscribe();
      }))
      .subscribe();
    }
  }

}
