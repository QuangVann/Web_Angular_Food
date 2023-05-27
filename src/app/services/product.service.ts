import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { Observable } from 'rxjs'
// import { UsersList } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  @Output() event = new EventEmitter();

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:8080/api/products')
  }
  getProduct(id: number | string | null ): Observable<IProduct>{

    return this.http.get<IProduct>('http://localhost:8080/api/products/'+ id)
  }
  deleteProduct(id: number | string): Observable<any>{
    return this.http.delete<any>('http://localhost:3000/products/' + id)
  }
  addProduct(product : IProduct): Observable<IProduct[]>{
    return this.http.post<IProduct[]>('http://localhost:3000/products/',product)
  }
  updateProduct(product : IProduct): Observable<IProduct>{
    return this.http.put<IProduct>(`http://localhost:3000/products/${product.id}`,product)
  }
}
