import { Component } from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {Product} from '../../shared/models/Product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  public product:Product | undefined;

  constructor (
    private productService: ProductService,
    private router: Router,
    private route:ActivatedRoute,
  ){
    console.log(productService.getAllProducts())
    let id:number = this.route.snapshot.params["productId"];
    this.product=productService.getProductById(id)
  }
}
