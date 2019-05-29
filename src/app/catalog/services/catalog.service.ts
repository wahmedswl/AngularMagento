import { Injectable } from '@angular/core';
import { Product } from 'src/app/catalog/models/product';
import { Input, Component} from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
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
export class CatalogService {

   private coreUrl:string;

   constructor(private http:HttpClient) {
        this.coreUrl="http://localhost:8080/magento3";
   }

    getProducts(){
        return this.http.get(this.coreUrl + "/rest/all/V1/products?searchCriteria=all?accept:application/json")/*.pipe(map(res => res.json))*/;
    }

}