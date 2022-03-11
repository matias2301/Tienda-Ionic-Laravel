import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  AUTH_SERVER_ADDRESS: string = 'http://localhost:8000/api';

  constructor(
    private httpClient: HttpClient,    
  ) { }

  getProducts(): Observable<Product[]> {

    return this.httpClient
      .get<Product[]>(`${this.AUTH_SERVER_ADDRESS}/products`)
      .pipe(
        map( res => res),
      );
  }

  addProduct(product: Product): Observable<Product> {

    return this.httpClient
      .post<Product>(`${this.AUTH_SERVER_ADDRESS}/products`, product)
      .pipe(
        map( res => res),
      );
  } 

  updateProduct(productId: number, product: Product): Observable<Product> {

    return this.httpClient
      .put<Product>(`${this.AUTH_SERVER_ADDRESS}/products/${productId}`, product)
      .pipe(
        map( res => res),
      );
  } 

  deleteProduct(productId: number): Observable<Product> {

    return this.httpClient
      .delete<Product>(`${this.AUTH_SERVER_ADDRESS}/products/${productId}`)
      .pipe(
        map( res => res),
      );
  } 

}
