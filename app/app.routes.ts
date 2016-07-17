import { provideRouter, RouterConfig } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: RouterConfig = [
 { path: '', component: NavbarComponent }
];

export const appRouterProviders = [
  provideRouter(routes);
];