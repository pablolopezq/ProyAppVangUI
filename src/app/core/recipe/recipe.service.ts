import { Injectable } from '@angular/core';
import { RecipeadapterService } from '../recipeadapter/recipeadapter.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  service : RecipeadapterService;

  constructor(recipeAdapter : RecipeadapterService) {
      this.service = recipeAdapter;
   }

  getRecipes(ingredients: string[]) {
    return this.service.getRecipes(ingredients);
  }
}
