import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../Artist';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class SearchComponent {
  artistString: string;
  artistResults: Artist[];

  constructor(private _spotifyService: SpotifyService, private _router: Router) {

  }

  searchArtist() {
    if(this.artistString) {
      this._spotifyService.searchArtist(this.artistString)
        .subscribe(res => {
          console.log('res artist: ', res);
          this.artistResults = res.artists.items;
        })
    }
  }
}