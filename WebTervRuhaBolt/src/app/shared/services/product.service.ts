import { Injectable } from '@angular/core';
import {Product} from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products:  Product[]=[];


  constructor() {
    const data = localStorage.getItem('product');
    this.products = data ? JSON.parse(data) : [];
  }
  getAllProducts() {
    return this.products;
  }
  getProductById(id: number) {
    return this.products.find(product => product.id == id);
  }
  getLatestProducts() {
    if(this.products.length == 0){
      return 0;
    }else {
      return this.products.length;
    }

  }
  addLocalStorage(){
    localStorage.setItem('product', JSON.stringify(this.products));
  }

  newProduct(name: string, price: number,) {
    let product=new Product(this.getLatestProducts(),name,price);
    this.products.push(product);
    this.addLocalStorage();
  }

}
