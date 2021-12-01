import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import{ Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
// export class ItemComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class ItemComponent {

  editable = false;

  @Input()
  item!: Item;
  @Input()
  newItem!: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
  constructor (){}
  ngOnInit(): void {}

}
