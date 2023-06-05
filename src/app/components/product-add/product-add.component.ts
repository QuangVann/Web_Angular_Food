import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  product = {
    name: '',
    price: 0,
    desc: '',
    image: ''
}
  constructor(
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
    quanity: [0],
    desc: [],
    image: [],
  })
  onHandleSubmit() {
    if (this.productForm.valid) {
      const product : IProduct = {
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
        quanity: this.productForm.value.quanity || 0,
        desc: this.productForm.value.desc || "",
        image: this.productForm.value.image || "",
      }
      this.productService.addProduct(product).subscribe(data => {
        console.log(data);
        this.router.navigate(['/admin/product']);
      })
    }
  }
}
