import { Component, OnInit } from '@angular/core';
import { ListService } from '../../savelist.service';

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
    if (this.allItems.length > 0) {
      this.listService.saveList(this.allItems).then(() => {
        console.log('List saved successfully');
        console.log(this.allItems);

        // Logica adițională după salvarea cu succes
      });
    } else {
      console.log('No items to save');
    }
  }

  deleteList() {
    if (this.allItems.length > 0) this.allItems = [...this.removedItems];
    this.listService.deleteList(this.allItems).then(() => {
      console.log('Deleted list succesfully deleted');
    });
  }

  ngOnInit(): void {}

  allItems: { description: string; done: boolean }[] = [];
  constructor(private listService: ListService) {}
}
