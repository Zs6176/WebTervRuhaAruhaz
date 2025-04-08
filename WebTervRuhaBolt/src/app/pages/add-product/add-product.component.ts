import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {ProductService} from '../../shared/services/product.service';
import {Product} from '../../shared/models/Product';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  productForm!:FormGroup;


  constructor(private productService: ProductService,private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      number: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  addProduct() {
    if (this.productForm.valid) {
      this.productService.newProduct(this.productForm.value.name, this.productForm.value.number)
    }
  }
}
