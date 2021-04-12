import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { CardDetailComponent } from './card-detail/card-detail.component';


const routes: Routes = [
  {
    path: "",
    component: AlbumComponent
  },
  {
    path: 'album',
    component: AlbumComponent,
  },
  {
    path: 'album/:id',
    component: AlbumDetailComponent,
  },
  {
    path: 'card/:slug',
    component: CardDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
