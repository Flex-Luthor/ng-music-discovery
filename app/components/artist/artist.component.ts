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
  topTracks: any;
  relatedArtists: any;

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

    this._spotifyService.getTopTracks(this.newId)
      .subscribe(topTracks => {
        console.log('topTracks: ', topTracks.tracks);
        this.topTracks = topTracks.tracks;
      })

    this._spotifyService.getRelatedArtists(this.newId)
      .subscribe(relatedArtists => {
        this.relatedArtists = relatedArtists.artists;
        console.log('relatedArtists: ', this.relatedArtists);
      })

  }

}