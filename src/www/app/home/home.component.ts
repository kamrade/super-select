import { Component } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'vl-home-page',
    template: `
        <h2>I am the home-page</h2>
        <input type="text"/>
        <vl-select-with-search></vl-select-with-search>
        <input type="text"/>
    `,
    animations: [ routerTransition() ],
    host: { '[@routerTransition]': '' }
})

export class HomeComponent {}
