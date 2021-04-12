import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  card;
  constructor(private albumService: AlbumService, private route: ActivatedRoute,private titleService: Title) { }


  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.albumService.getCard(param.slug).subscribe(card => {
        this.card = card;
        console.log(card);
        //let title = this.card.data.layouts[0].name.en;
        this.titleService.setTitle("Some title");
      });
      
      
    })
  }

}
