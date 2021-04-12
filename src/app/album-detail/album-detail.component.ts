import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {

  album;
  photos;
  card;
  constructor(private albumService: AlbumService, private route: ActivatedRoute,private titleService: Title) { }


  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.albumService.getAlbumDetail(param.id).subscribe(album => {
        this.album = album;
        this.titleService.setTitle(album["title"]);
        this.albumService.getCard('cei_129_Simulacrum').subscribe(card =>  {
          this.card =  card;
        });
        this.photos = this.albumService.getPhotos(param.id);
      });
      
      
    })
  }

}
