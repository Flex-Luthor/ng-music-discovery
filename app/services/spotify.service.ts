import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SpotifyService {

  private searchUrl: string;
  private artistUrl: string;
  private topTracksUrl: string;
  private relatedArtistsUrl: string;

  constructor(private _http: Http) {

  }

  searchArtist(sArtist:string) {
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + sArtist + '&limit=8&type=artist';
    return this._http.get(this.searchUrl)
      .map(res => res.json());
  }

  getArtist(id:string) {
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    return this._http.get(this.artistUrl)
      .map(res => res.json());
  }

  getTopTracks(artistId:string) {
    this.topTracksUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/top-tracks?country=US';
    return this._http.get(this.topTracksUrl)
      .map(res => res.json());
  }

  getRelatedArtists(artistId:string) {
    this.relatedArtistsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/related-artists';
    return this._http.get(this.relatedArtistsUrl)
      .map(res => res.json());
  }

}