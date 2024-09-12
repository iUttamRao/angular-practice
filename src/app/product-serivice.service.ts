import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductSeriviceService {

  constructor() { }

  productList = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      description: "High-quality wireless headphones with noise-cancellation feature.",
      price: 6599,
      category: "Electronics",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png",
      stockQuantity: 25,
      ratings: 4.5
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      description: "Track your daily activity with this water-resistant smart fitness watch.",
      price: 10799,
      category: "Wearables",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png",
      stockQuantity: 40,
      ratings: 4.7
    },
    {
      id: 3,
      name: "Eco-friendly Water Bottle",
      description: "Reusable and durable water bottle made from sustainable materials.",
      price: 1599,
      category: "Home & Kitchen",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png",
      stockQuantity: 100,
      ratings: 4.8
    },
    {
      id: 4,
      name: "Organic Cotton T-Shirt",
      description: "Soft and breathable t-shirt made from 100% organic cotton.",
      price: 2399,
      category: "Clothing",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png",
      stockQuantity: 60,
      ratings: 4.6
    },
    {
      id: 5,
      name: "Portable Phone Charger",
      description: "Compact and lightweight phone charger with fast charging capability.",
      price: 3199,
      category: "Accessories",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png",
      stockQuantity: 80,
      ratings: 4.3
    },
    {
      id: 6,
      name: "Gaming Mouse",
      description: "High-precision gaming mouse with customizable buttons and RGB lighting.",
      price: 2799,
      category: "Electronics",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png",
      stockQuantity: 30,
      ratings: 4.4
    },
    {
      id: 7,
      name: "Noise-Cancelling Earbuds",
      description: "In-ear wireless earbuds with active noise cancellation and long battery life.",
      price: 4999,
      category: "Electronics",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png",
      stockQuantity: 50,
      ratings: 4.6
    },
    {
      id: 8,
      name: "LED Desk Lamp",
      description: "Adjustable LED desk lamp with touch control and multiple brightness levels.",
      price: 2199,
      category: "Home & Kitchen",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png",
      stockQuantity: 70,
      ratings: 4.7
    },
    {
      id: 9,
      name: "Leather Wallet",
      description: "Premium leather wallet with multiple card slots and a sleek design.",
      price: 3499,
      category: "Accessories",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png",
      stockQuantity: 45,
      ratings: 4.5
    },
    {
      id: 10,
      name: "Bluetooth Smart Speaker",
      description: "Portable Bluetooth speaker with high-quality sound and built-in voice assistant.",
      price: 3999,
      category: "Electronics",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png",
      stockQuantity: 35,
      ratings: 4.6
    },
    {
      id: 11,
      name: "Travel Backpack",
      description: "Spacious and durable backpack with multiple compartments and ergonomic design.",
      price: 4999,
      category: "Accessories",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png",
      stockQuantity: 55,
      ratings: 4.4
    },
    {
      id: 12,
      name: "Stainless Steel Thermos",
      description: "Vacuum-insulated thermos that keeps your beverages hot or cold for hours.",
      price: 2499,
      category: "Home & Kitchen",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png",
      stockQuantity: 90,
      ratings: 4.8
    }
  ];
  
  
  productById(id: any) {
    return this.productList.find((item) => id == item.id)
  }
}
