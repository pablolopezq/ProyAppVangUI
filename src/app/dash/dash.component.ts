import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ListsService } from '../core/lists.service';
import { List } from '../models/list';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 1, rows: 1, items:['Item 1', 'Item 2', 'Item 3'] },
  //       { title: 'Card 2', cols: 1, rows: 1, items:['Item 1', 'Item 2', 'Item 3'] },
  //       { title: 'Card 3', cols: 1, rows: 1, items:['Item 1', 'Item 2', 'Item 3'] },
  //       { title: 'Card 4', cols: 1, rows: 1, items:['Item 1', 'Item 2', 'Item 3'] },
  //     ];
  //   })
  // );

  cards: List[];
  service: ListsService;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.service = new ListsService();
  }

  ngOnInit(){
    this.cards = this.service.getLists();
    console.log(this.cards)
  }

  addItem(id: number, item: string){
    console.log(id, item)
  }
}
