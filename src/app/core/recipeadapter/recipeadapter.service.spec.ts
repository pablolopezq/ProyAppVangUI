import { TestBed } from '@angular/core/testing';

import { RecipeadapterService } from './recipeadapter.service';

describe('RecipeadapterService', () => {
  let service: RecipeadapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeadapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
