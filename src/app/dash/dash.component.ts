import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ListsService } from '../core/lists/lists.service';
import { List } from '../models/list';
import { RecipeDialogComponent } from '../recipe-dialog/recipe-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { RecipeadapterService } from '../core/recipeadapter/recipeadapter.service';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { Recipe } from '../models/recipe';

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
  recipeService: RecipeadapterService;
  input = ''
  ingredients = []

  constructor(public dialog: MatDialog, _listService: ListsService, _recipeService: RecipeadapterService) {
    this.service = _listService;
    this.recipeService = _recipeService;
  }

  ngOnInit(){
    this.cards = this.service.getLists();
    console.log(this.cards)
  }

  addItem(id: number){
    this.service.addItem(id, this.input);
  }

  deleteItem(id: number, item: string){
    this.service.deleteItem(id, item);
    this.ngOnInit();
  }

  onKey(event: KeyboardEvent) {
    this.input = (event.target as HTMLInputElement).value;
  }

  openDialog(ingredients: string[]): void {
    let recipes = this.recipeService.getRecipes(ingredients);
    const dialogRef = this.dialog.open(RecipeDialogComponent, {
      width: '250px',
      data: {recipes: recipes}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }
}
