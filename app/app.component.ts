import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent { }
