import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Order } from '../common/order.spec';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private baseUrl = 'http://localhost:8080/api/orders';

  constructor(private httpClient: HttpClient) {}
  getOrders(): Observable<Order[]> {
return this.httpClient.get<Order[]>(`${this.baseUrl}/getAllOrders`)
  }
}
