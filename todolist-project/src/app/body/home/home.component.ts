import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  item: any;
  newItem: any;
  savedItems: { description: string; done: boolean }[] = [];
  deletedItems: { description: string; done: boolean }[] = [];

  removedItems = [];
  newItemDescription = '';

  removeItem(index: number) {
    if (index > -1) {
      this.allItems.splice(index, 1);
    }
  }
  addItem(): void {
    if (this.newItemDescription.trim() !== '')
      this.allItems.push({ description: this.newItemDescription, done: false }),
        (this.newItemDescription = '');
  }
  saveList() {
    this.savedItems = [...this.allItems];
    // console.log(this.savedItems);
  }

  deleteList() {
    this.allItems = [];
  }

  ngOnInit(): void {}

  allItems: { description: string; done: boolean }[] = [
    { description: 'Work', done: true },
    { description: 'Sleep', done: true },
    { description: 'Eat', done: true },
  ];
  constructor() {}
}
