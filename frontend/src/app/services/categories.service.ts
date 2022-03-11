import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public categorySelected = new BehaviorSubject<string>(null);

  constructor() { }

  setCategory( category: string ){
    this.categorySelected.next(category);
  }

}
