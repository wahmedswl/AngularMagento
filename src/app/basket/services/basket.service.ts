import { Injectable } from '@angular/core';

//Исп. localstorage для сохранения данных в корзине

import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Product } from 'src/app/catalog/models/product';
import { BehaviorSubject, Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1',
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    //"Accept": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private webApiUrl:string;
  private personalTokenUrl:string;

  private cartId:string;

  private personalToken:string;

  private _items: Product[] = [];
  private _itemsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this._items); 

  constructor(private http:HttpClient) {
    this.webApiUrl="http://localhost:8080/magento3";
    this.personalTokenUrl="dev.magento2.com/rest/V1/customers/me/accept: application/json";
    //this.http.get(this.url+"/rest/V1/customers/me/accept:application/json").subscribe((data:any) => this.personalToken = data.customerId)//only for authorized
    this.http.post(this.webApiUrl+"/rest/all/V1/guest-carts",this.personalToken).subscribe((data:string) => this.cartId=data);
   }

   public get items$(): Observable<Product[]>{
     return this._itemsSubject;
   }

   createOrLoadBasket(){
     //this.http.post(this.url+"/rest/all/V1/guest-carts");
   }

   addToBasketComponent(product:Product){
      this._items.push(product);
      this._itemsSubject.next(this._items);
      
      this.http.put(this.webApiUrl+"/rest/all/V1/guest-carts/"+this.cartId+"/items/"+product.id,this.http.get(this.webApiUrl+"/rest/all/V1/products/"+product.sku)).toPromise();

   }

   deletefromCart(product:Product){
     //let serverObject:any;
     //this.http.get(this.url+"/rest/all/V1/products/"+product.sku).subscribe((data:object)=>serverObject=data);
     this.http.delete(this.webApiUrl+"/rest/all/V1/guest-carts/"+this.cartId+"/items/"+product.id).toPromise();
   }

   orderCart(){
     this.http.put(this.webApiUrl+"/rest/all/V1/guest-cards/"+this.cartId+"/order",this.personalToken).toPromise();
   }

}