import { Input, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/catalog/models/product';
import { CatalogService } from 'src/app/catalog/services/catalog.service';
import { BasketService} from 'src/app/basket/services/basket.service';



@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  
  public items:Product[]=[];

  constructor(private catalogService:CatalogService,private basketService:BasketService) { }

  ngOnInit() {
    this.basketService.items$.subscribe((items)=>this.items=items);
  }

  remove(product:Product)
  {
    this.items.splice(this.items.findIndex(data => data==product),1);
  }

}
