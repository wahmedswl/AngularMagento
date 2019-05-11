import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
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

  constructor(private http:HttpClient) {
   }

   getProducts(){
     return JSON.parse(this.http.get("http://localhost:8080/magento/rest/all/V1/products?searchCriteria=all?accept:application/json"));
   }
   ///accept:application/json
}
