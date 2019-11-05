import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Rights } from '../domain/rights';
import { SelectorMatcher } from '@angular/compiler';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Checkbox } from 'primeng/checkbox';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-rights-and-attributes',
  templateUrl: './rights-and-attributes.component.html',
  styleUrls: ['./rights-and-attributes.component.css'],
  //encapsulation: ViewEncapsulation.ShadowDom , 
  //encapsulation: ViewEncapsulation.Native  
})
export class RightsAndAttributesComponent implements OnInit {
  @Input() rights: Rights[];
  @Input() registers: any[];
  selectedValue: string;
  @ViewChild(Checkbox, { static: false }) el: Checkbox;
  @ViewChild('registersTable', { static: false }) registersTable: Table;

  @Output() sendDataToParent = new EventEmitter<any>();
  //@Output() expandRowEmitter = new EventEmitter<{ rowName: string }>();

  constructor() { }

  ngOnInit() {


  }
  ngAfterViewInit() {

  }

  _sendDataToParent(data) {
    this.sendDataToParent.emit(data);
  }

  onRowExpand(parent, event) {
    // debugger;
    if (event) {
      event.preventDefault();
    }
    const rows: any[] = parent || (this.registersTable as any).value;
    if (parent) {
      console.log(parent)
      parent.isOpen = !parent.isOpen;
    }

  }



  search(node) {
    if (node != null) {
      node.checked = true;
      if (node.rights != null) {
        for (let i = 0; i < node.rights.length; i++) {
          node.rights.checked = true;
          for (let i = 0; i < node.rights.length; i++) {
            const found = this.search(node.rights[i]);
            node.rights.checked = true;
          }
        }
      }
    }
  };


  search2 = (node) => {
    if (node != null) {
      console.log("found", node);
      node.checked = true;
      if (node.rights != null) {
        for (let i = 0; i < node.rights.length; i++) {
          const found = this.search2(node.rights[i]);
          node.rights.checked = false;
        }
      }
    }
  }
}
