import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Product } from '../models/product';
import { AppError } from '../common/app-error';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  apiUrl = 'http://localhost:3000/products';

  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        tap(product => console.log('fetched products')),
        catchError(this.handleError('getProducts',[]))
      );
     
  }

  getProduct(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<any>(`getProduct id=${id}`))
    );
  }

  addProduct(product: Product): Observable<Product> {
    product.id=null;
    return this.http.post<Product>(this.apiUrl, product)
      .pipe( tap(_ => console.log('adding a product')),
      catchError(this.handleError)
      );
      
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    product.id= id;
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Product>(this.apiUrl, product, this.httpOptions)
      .pipe(
        map(() => product),
        catchError(this.handleError));
  }


  deleteProduct(id: number) {}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
