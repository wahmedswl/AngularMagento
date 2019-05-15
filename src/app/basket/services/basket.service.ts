import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Product } from 'src/app/catalog/models/product';
import { BehaviorSubject, Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private coreUrl:string;

  private _items: Product[] = [];
  private _itemsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this._items); 

  constructor(private http:HttpClient) {
    this.coreUrl="http://localhost:8080/magento";
   }

   public get items$(): Observable<Product[]>{
     return this._itemsSubject;
   }

   addToBasketComponent(product:Product){
      this._items.push(product);
      this._itemsSubject.next(this._items);
   }

   addToCard(items:Product[]){}

}