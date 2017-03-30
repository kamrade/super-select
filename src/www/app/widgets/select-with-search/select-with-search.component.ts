import { Component, Input, ViewChild } from '@angular/core';

import { items } from './select-items.mockup';
import { SelectElement } from './select-element';

import {trigger, state, animate, style, transition} from '@angular/core';

@Component({
    selector: 'vl-select-with-search',
    templateUrl: 'select-with-search.component.html',
    styleUrls: ['select-with-search.component.scss'],
    animations: [
      trigger('selectState', [
        state('inactive', style({
          height: "0",
          borderWidth: "0px",
          opacity: "0"
        })),
        state('active', style({
          height: "140px",
          borderWidth: "1px",
          opacity: "1"
        })),
        transition('inactive => active', animate('140ms ease-in')),
        transition('active => inactive', animate('140ms ease-out'))
      ])
    ]
})

export class SelectWithSearchComponent {
  selected: SelectElement;
  items: SelectElement[] = items;
  opened: boolean = false;
  selectState: string = "inactive";

  @ViewChild('container')
  container;
  @ViewChild('search')
  search;

  toggleSelect(e) {

    if (e.target == this.search.nativeElement) {
      console.log("dont close");
    } else {
      this.container.nativeElement.classList.toggle("open");
      this.opened = !this.opened;
      this.selectState = (this.selectState == "inactive") ? "active" : "inactive";
    }
    this.search.nativeElement.focus();
  }

  closeSelect() {
    this.container.nativeElement.classList.remove("open");
    this.opened = false;
    this.selectState = "inactive";
  }

  setSelected(item): void {
    this.selected = item;
  }
}
