import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { AppError } from '../common/app-error';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  error: AppError;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.service.getProducts()
      .subscribe((res: any) => {
        this.products = res;
        console.log(this.products);
      }, 
      (err: AppError) => {
        this.error = err;
        console.log(
          'Failed! Error occurred when getting products. (via Observable)',
          err
        );
      }
    );
  }

  onDelete(productId) {}

}
