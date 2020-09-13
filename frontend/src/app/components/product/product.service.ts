import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

import { Product } from './product.model';
import { Observable, EMPTY } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "http://localhost:3001/products";

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  showMessage (msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, '×', {
      duration: 3000,
      verticalPosition: "top",
      horizontalPosition: "right",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  errorHandler (e: any): Observable<any> {
    this.showMessage('Impossível completar solicitação', true);

    return EMPTY;
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL);
  }

  readById (id: string): Observable<Product> {
    const url = `${this.baseURL}/${id}`;

    return this.http.get<Product>(url);
  }

  update (product: Product): Observable<Product> {
    const url = `${this.baseURL}/${product.id}`;

    return this.http.put<Product>(url, product);
  }

  delete (id: string): Observable<Product> {
    const url = `${this.baseURL}/${id}`;

    return this.http.delete<Product>(url);
  }
}
