import { Component, ViewChild, OnInit } from '@angular/core';

import { SelectOption } from './select-option';
import { SelectWithSearchService } from './select-with-search.service';

import {trigger, state, animate, style, transition} from '@angular/core';

@Component({
    selector: 'vl-select-with-search',
    templateUrl: 'select-with-search.component.html',
    styleUrls: ['select-with-search.component.scss'],
    providers: [ SelectWithSearchService ],
    animations: [
      trigger('selectContentState', [
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

  filterValue: string = '';
  items: SelectOption[];       // initial options
  selectItems: SelectOption[]; // filterd options
  status: string = 'inactive';  // active/inactive
  currentValue: SelectOption;

  @ViewChild('container')
  container;
  @ViewChild('search')
  search;

  constructor(
    private selectWithSearchService: SelectWithSearchService
  ) {}

  ngOnInit(): void {
    this.items = this.selectWithSearchService.getSelectElements();
    this.selectItems = this.selectWithSearchService.getSelectElements();
  }

  onSearchBlur(e) {
    setTimeout(() => {
      this.closeSelect();
    }, 100);

  }

  selectOption(item) {
    console.log('select option');
    console.log(item, 'selected');
  }

  openSelect() {
    console.log('open select');
    this.status = 'active';
  }

  toggleSelect(e) {
    console.log('toggle select');
    if(e.target === this.search.nativeElement) {
      console.log('do nothing');
    } else {
      this.search.nativeElement.focus();
      this.status = (this.status === 'active') ? 'inactive' : 'active';
    }
  }

  closeSelect() {
    console.log('close select');
    this.status = 'inactive';
    this.search.nativeElement.value = '';
    this.filterValue = '';
    this.selectItems = this.items;
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
