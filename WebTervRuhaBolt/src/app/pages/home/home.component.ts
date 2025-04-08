import {Component, Input, Output} from '@angular/core';
import {Product} from '../../shared/models/Product';
import {ProductService} from '../../shared/services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() products: Product[] =[];
  @Output() data: Product[] =this.products;
  constructor (private productService: ProductService, private route:ActivatedRoute){
    this.productService.getAllProducts().forEach((product: Product) => {this.products.push(product)});
    console.log(this.products);
  }

}
