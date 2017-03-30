import { Component, ViewChild } from '@angular/core';

import { items } from './select-items.mockup';
import { SelectElement } from './select-element';

@Component({
    selector: 'vl-select-with-search',
    templateUrl: 'select-with-search.component.html',
    styleUrls: ['select-with-search.component.scss']
})
export class SelectWithSearchComponent {
  selected: SelectElement;
  items: SelectElement[] = items;
  opened: boolean = false;

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
    }
    this.search.nativeElement.focus();
  }

  closeSelect() {
    this.container.nativeElement.classList.remove("open");
    this.opened = false;
  }

  setSelected(item): void {
    this.selected = item;
  }
}
