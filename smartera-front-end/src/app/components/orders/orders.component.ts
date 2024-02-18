import { OrdersService } from './../../services/orders.service';
import { Order } from './../../common/order.spec';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  constructor(
    private ordersService: OrdersService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.ordersList();
    });
  }
  ordersList() {
    this.ordersService.getOrders().subscribe((data) => {
      console.log('Orders: ' + JSON.stringify(data));
      this.orders = data;
    });
  }
}
