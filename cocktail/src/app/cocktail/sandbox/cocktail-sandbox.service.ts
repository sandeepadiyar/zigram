import { Injectable } from '@angular/core';
import { ListType } from '../interface';
import { Observable, of, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CocktailSandboxService {
  public list$: Observable<any> = of([]);
  constructor(private http: HttpClient) {
  }

  public getList() {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  }

  public search(item) {
    const searchByNameResponse = this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + item);
    const searchByIngredientResponse = this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + item);
    const searchByCategoryResponse = this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + item);
    return forkJoin([searchByNameResponse, searchByIngredientResponse, searchByCategoryResponse]);
  }

}