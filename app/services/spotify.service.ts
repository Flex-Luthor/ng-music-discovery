import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SpotifyService {

  private searchUrl: string;

  constructor(private _http: Http) {

  }

  searchArtist(sArtist:string) {
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + sArtist + '&limit=8&type=artist';
    return this._http.get(this.searchUrl)
      .map(res => res.json());
  }

}