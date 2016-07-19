import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../Artist';
import { Album } from '../../Album';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
  styleUrls: ['artist.component.css']
})

export class ArtistComponent {
  id: string;
  newId: string;
  artist: Artist[];
  albums: Album[];

  constructor(private _spotifyService: SpotifyService, private _router: Router, private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this._route.params
      .subscribe(params => {
        this.newId = params['id'];
      })

    this._spotifyService.getArtist(this.newId)
      .subscribe(artist => {
        console.log('artist: ', artist);
        this.artist = artist;
      })

  }

}