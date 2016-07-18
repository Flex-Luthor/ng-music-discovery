import { Component } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class SearchComponent { 

  artistString: string;

  searchArtist() {
    console.log('hello');
  }

}