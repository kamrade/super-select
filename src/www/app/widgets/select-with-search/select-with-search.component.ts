import { Component, ViewChild, OnInit } from '@angular/core';
import { SelectElement } from './select-element';

import { SelectWithSearchService } from './select-with-search.service';

import {trigger, state, animate, style, transition} from '@angular/core';

@Component({
    selector: 'vl-select-with-search',
    templateUrl: 'select-with-search.component.html',
    styleUrls: ['select-with-search.component.scss'],
    providers: [ SelectWithSearchService ],
    animations: [
      trigger('selectState', [
        state('inactive', style({
          height: '0',
          borderWidth: '0px',
          opacity: '0'
        })),
        state('active', style({
          height: '140px',
          borderWidth: '1px',
          opacity: '1'
        })),
        transition('inactive => active', animate('140ms ease-in')),
        transition('active => inactive', animate('140ms ease-out'))
      ])
    ]
})

export class SelectWithSearchComponent implements OnInit {

  // выбранный элемент
  selected: SelectElement;
  // значение фильтра
  filterValue: string;
  // изначальные элементы
  items: SelectElement[];
  // отфильтрованные элементы
  selectItems: SelectElement[];
  // открыт?
  opened: boolean = false;
  // статус селекта
  selectState: string = 'inactive';

  @ViewChild('container')
  container;
  @ViewChild('search')
  search;

  constructor(
    private selectWithSearchService: SelectWithSearchService
  ) {}

  ngOnInit(): void {
    this.getSelectItems();
    // this.search.nativeElement.value = this.selected ? this.selected.name : '';
  }

  getSelectItems(): void {
    this.items = this.selectWithSearchService.getSelectElements();
    this.selectItems = this.selectWithSearchService.getSelectElements();
  }

  toggleSelect(e) {
    if (e.target === this.search.nativeElement) {
      console.log('dont close');
    } else {
      this.container.nativeElement.classList.toggle('open');
      this.opened = !this.opened;
      this.selectState = (this.selectState === 'inactive') ? 'active' : 'inactive';
    }
    this.search.nativeElement.focus();
  }

  closeSelect() {
    this.container.nativeElement.classList.remove('open');
    this.opened = false;
    this.selectState = 'inactive';
  }

  setSelected(item): void {
    this.selected = item;
  }

  startFilter(e): void {
    this.filterValue = this.search.nativeElement.value.toLowerCase();

    if (this.filterValue !== '' && this.filterValue.length > 1) {
      this.selectItems = this.items.filter( (value) => {
        if ( value.name.toLowerCase().indexOf(this.filterValue) >= 0 ) {
          return true;
        }
      });
    } else {
      this.selectItems = this.items;
    }

  }


}
