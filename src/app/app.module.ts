import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './product/products.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogService } from './catalog/services/catalog.service';
import { ProductService } from './product/services/product.service';
import { BasketComponent } from './basket/basket.component';
import { BasketService } from './basket/services/basket.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CatalogComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'app-catalog', component: CatalogComponent},
      { path: 'app-basket', component: BasketComponent},
      { path: 'app-products', component: ProductsComponent},

    ])
  ],
  providers: [CatalogService, ProductService, BasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
