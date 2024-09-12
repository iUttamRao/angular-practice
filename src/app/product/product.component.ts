import { Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NzCardModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
   @Input() productList : any = []

}
