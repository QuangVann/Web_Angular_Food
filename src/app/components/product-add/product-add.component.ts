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
    img: ''
}
  constructor(
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
    desc: [],
    img: [],
  })
  onHandleSubmit() {
    if (this.productForm.valid) {
      const product : IProduct = {
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
        desc: this.productForm.value.desc || "",
        img: this.productForm.value.img || "",
      }
      this.productService.addProduct(product).subscribe(data => {
        console.log(data)
        console.log(data);
        this.router.navigate(['/admin/product']);
      })
    }
  }
}
