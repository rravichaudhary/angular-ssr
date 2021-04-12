import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  albums;
  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albums = this.albumService.getAlbums();
  }

}
