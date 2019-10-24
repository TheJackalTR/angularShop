import { Component, OnInit } from '@angular/core';
import { Product } from './product';
declare let alertify: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Ürün Listesi"
  filterText: string
  products: Product[] = [
    { id: 1, name: "Laptop", price: 2500, categoryId: 1, description: "Asus ZenBook", imageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" },
    { id: 2, name: "Mouse", price: 25, categoryId: 2, description: "A4 Tech", imageUrl: "https://images.unsplash.com/photo-1563297007-0686b7003af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1091&q=80" }
  ]

  ngOnInit() {
  }

  addToCart(product) {
    alertify.success(product.name + " added")
  }

}
