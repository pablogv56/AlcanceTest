import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Post } from './interfaces/post.interfase';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts!:Post[];
  columnsToDisplay = ['id','userId','title','body'];

  constructor(private postsSvc:PostService) { }

  ngOnInit(): void {
    this.postsSvc.getPosts()
    .pipe(tap ( (posts:Post[]) => this.posts = posts))
    .subscribe();
  }

}
