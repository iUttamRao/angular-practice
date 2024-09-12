import { Component, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductSeriviceService } from '../product-serivice.service';
import { FilterPipe } from '../filter.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [ProductComponent,FilterPipe,FormsModule],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.css'
})
export class EcommerceComponent {
  

  constructor(private ProductService: ProductSeriviceService) { }
  searchText = ""
  productList = this.ProductService.productList
  
}
