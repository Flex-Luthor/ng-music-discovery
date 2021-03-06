import { provideRouter, RouterConfig } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';

const routes: RouterConfig = [
 { path: '', component: SearchComponent },
 { path: 'artist/:id', component: ArtistComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];