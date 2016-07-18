import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';

import { SpotifyService } from './services/spotify.service';
import { HTTP_PROVIDERS } from '@angular/http';

import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [SpotifyService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES, NavbarComponent, SearchComponent]
})

export class AppComponent { }
