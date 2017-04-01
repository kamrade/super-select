import { Injectable } from '@angular/core';
import { SelectElement } from './select-element';
import { SELECT_ELEMENTS } from './select-elements-mockup';

@Injectable()
export class SelectWithSearchService {

  getSelectElements(): SelectElement[] { // stub
    console.log(SELECT_ELEMENTS.length);
    return SELECT_ELEMENTS;
  }

}
