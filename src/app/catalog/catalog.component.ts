import { Component, OnInit } from '@angular/core';
import { CatalogService } from './services/catalog.service';
import { BasketService} from 'src/app/basket/services/basket.service';
import { Product } from './models/product';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public products:Array<Product>;
  public selectedProduct:Product;

  constructor(private catalogService:CatalogService,private basketService:BasketService) { }

  ngOnInit() {
    this.getProducts();
  }

  add(p:Product) {
    this.basketService.addToBasketComponent(p);
  }

  getProducts()
  {
    this.catalogService.getProducts()
      .subscribe((data: any) => this.products = data.items);
  }

}
