import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Recipe } from '../models/recipe';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';

@Component({
  selector: 'app-recipe-dialog',
  templateUrl: './recipe-dialog.component.html',
  styleUrls: ['./recipe-dialog.component.css']
})
export class RecipeDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RecipeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  openDetail(recipe : Recipe): void {
    console.log(recipe)
    const dialogRef = this.dialog.open(RecipeDetailComponent, {
      width: '250px',
      data: {recipe: recipe}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }
  
  ngOnInit(): void {}

}
