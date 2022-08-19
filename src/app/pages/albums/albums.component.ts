import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Album } from './interfaces/album.interface';
import { AlbumService } from './services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums!:Album[];
  displayedColumns = ['id','title','userId'];

  constructor(private albumsSvc:AlbumService) { }

  ngOnInit(): void {
    this.albumsSvc.getAlbums()
    .pipe( tap ((albums:Album[]) => this.albums = albums))
    .subscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if(filterValue != '')
    {
      this.albumsSvc.getAlbumsByUserId(filterValue)
        .pipe( tap ((albums:Album[]) => this.albums = albums))
        .subscribe();
    }else
    {
      this.albumsSvc.getAlbums()
      .pipe( tap ((albums:Album[]) => this.albums = albums))
      .subscribe();
    }
  }

}
