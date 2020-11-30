import { Injectable } from '@angular/core';
import { List } from '../../models/list';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor() { }

  lists : List[] = [
    {id: 1, name: 'Groceries', items: ['Milk', 'Eggs', 'Cheese']},
    {id: 2, name: 'Bands', items: ['Muse', 'Atomic Rose', 'The Strokes']},
    {id: 3, name: 'Workspace', items: ['Monitor', 'Desk', 'Microphone']},
    {id: 4, name: 'Games', items: ['Chess', 'Billiard', 'Poker']}
  ]

  getLists() : List[] {
    return this.lists;
  }

  deleteItem(id: number, item: string){
    let list = this.lists.find(x => x.id === id);
    const i = list.items.indexOf(item);
    list.items.splice(i,1);
  }

  addItem(id: number, item: string){
    let list = this.lists.find(x => x.id === id);
    list.items.push(item);
  }
}
