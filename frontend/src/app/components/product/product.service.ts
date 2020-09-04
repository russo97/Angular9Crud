import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "http://localhost:3001/products";

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  showMessage (msg: string): void {
    this.snackBar.open(msg, '×', {
      duration: 3000,
      verticalPosition: "top",
      horizontalPosition: "right"
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL);
  }
}
