import { Injectable } from '@angular/core';

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
export class ProductService {

  private coreUrl:string;

  constructor(private http:HttpClient) {
    this.coreUrl="http://localhost:8080/magento";
   }

}