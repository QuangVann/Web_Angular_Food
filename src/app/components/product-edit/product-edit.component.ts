import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product: any={
    name:"",
    price:0,
    desc:"",
    image:""
  }
  productForm = this.formBuilder.group({
    name: ['', Validators.required],
    price:[0],
    desc: ['', Validators.required],
    image:['']
  })
  constructor(private formBuilder:FormBuilder,
    private router:ActivatedRoute,
    private productService:ProductService
    
    ){
      this.router.paramMap.subscribe(param=>{
        const id=Number(param.get('id'));
        this.productService.getProduct(id).subscribe(product=>{
          this.product=product;
          this.productForm.patchValue({
            name:product.name,
            price:product.price,
            desc:product.desc,
            image:product.image
          })
        })
      })
    }
    onHandleSubmit() {
      if (this.productForm.invalid) return;
  
      const product: IProduct = {
        id: this.product.id,
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
        desc: this.productForm.value.desc || '' ,
        image: this.productForm.value.image || ''
      }
      this.productService.updateProduct(product).subscribe(data => {
        console.log(data)
      })
    }
}
