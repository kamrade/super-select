import { Component } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'vl-home-page',
    template: `
        <h2>I am the home-page</h2>
        <vl-select-with-search></vl-select-with-search>
    `,
    animations: [ routerTransition() ],
    host: { '[@routerTransition]': '' }
})

export class HomeComponent {}
