import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbumDetail(albumId:number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
  }
  getPhotos(albumId:number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }

  getCard(slug){
    return this.http.get(`https://bigarstorageqa2.blob.core.windows.net/mtg/cardjson/cards/${slug}`);
  }

  getAPIURL(){
    return [
      'https://files.dragonshield.com/mtg/cardjson/cards/pkhm_107p_RiseoftheDreadMarn',
      'https://files.dragonshield.com/mtg/cardjson/cards/cei_129_Simulacrum',
      'https://files.dragonshield.com/mtg/cardjson/cards/rix_77_MastermindsAcquisition',
      'https://files.dragonshield.com/mtg/cardjson/cards/bbd_194_DaggerbackBasilisk',
    ];
  }
}
