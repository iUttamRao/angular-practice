import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ProductSeriviceService } from '../product-serivice.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NzCardModule,RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product: any
  
  constructor(private route: ActivatedRoute, private ProductService: ProductSeriviceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = this.ProductService.productById(params.get('id'))
    })
  }
  



}
