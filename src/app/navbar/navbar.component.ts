import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  selectedNav='/'
  navList = [
    {
      title: 'Home',
      routing: '/'
    },
    {
      title: 'Profile',
      routing: '/profile'
    },
    {
      title: 'Calculator',
      routing: '/calculator'
    },
    {
      title: "E-Commerce",
      routing: '/ecommerce'
    },
    {
      title: "Form",
      routing: '/form'
    }
  ]
  navClick = (value : string) => {
    this.selectedNav = value
  }
  ngOnInit() {
    if (location.pathname.includes("/ecommerce/product")) {
      this.selectedNav = '/ecommerce'
    }
    else {
      this.selectedNav = location.pathname
    }
  }
}
