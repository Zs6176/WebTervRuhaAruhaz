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

  constructor (private productService: ProductService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
          (
            this.productService.getAllProducts().subscribe(products => {
              this.products = products;
            }));
          console.log(this.products);
      }
    )
  }
  ngOnChanges(){

  }
  desc(){
    this.route.params.subscribe(params => {
        (
          this.productService.descProduct().then(products => {
            this.products = products;
          }));
        console.log(this.products);
      }
    )
  }
  asc(){
    this.route.params.subscribe(params => {
        (
          this.productService.ascProduct().then(products => {
            this.products = products;
          }));
        console.log(this.products);
      }
    )
  }
}
