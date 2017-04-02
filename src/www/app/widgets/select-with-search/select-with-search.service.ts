import { Injectable } from '@angular/core';
import { SelectOption } from './select-option';
import { SELECT_OPTIONS } from './select-options-mockup';

@Injectable()
export class SelectWithSearchService {

  getSelectElements(): SelectOption[] { // stub
    console.log(SELECT_OPTIONS.length);
    return SELECT_OPTIONS;
  }

}
