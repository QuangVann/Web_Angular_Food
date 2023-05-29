import { Component,Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-admin-pages',
  templateUrl: './admin-pages.component.html',
  styleUrls: ['./admin-pages.component.css']
})
export class AdminPagesComponent {
  products :IProduct[]=[];
  constructor(private productService :ProductService){
    this.productService.getProducts().subscribe(data=>{
      this.products=data;
  },error=>console.log(error.message))
}
  removeItem(id: any){
    this.productService.deleteProduct(id).subscribe(()=>{
      this.products= this.products.filter((item)=>item.id!==id)
  })
}
}