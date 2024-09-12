import { Component, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service';
import { NzCardModule } from 'ng-zorro-antd/card';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HttpClientModule,NzCardModule, TitleCasePipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  apiService = inject(ApiService)
  data: any = []

  ngOnInit() {
    this.apiService.getData().subscribe({
      next: (data: any) => {
        this.data = data.results;
      }, error: (err) => console.log(err)
    });
  }

}
