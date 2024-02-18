import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Customer } from '../common/customer';
import { Order } from '../common/order.spec';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'http://localhost:8080/api/orders';
  httpClient: any;
  baseUrl: any;
  constructor(private http: HttpClient, private authService: AuthService) {}

  getOrders():Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/getAllOrders`);
  }
  createCustomer(customerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/customers`, customerData);
  }
  updateCustomer(customerId: number, customerData: any): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/customers/updateCustomerById/${customerId}`,
      customerData
    );
  }
  deleteCustomer(customerId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/customers/${customerId}`);
  }
  getCustomerById(customerId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/customers/${customerId}`);
  }
  createOrder(orderData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/orders`, orderData);
  }
  updateOrder(orderId: number, orderData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/orders/${orderId}`, orderData);
  }
  deleteOrder(orderId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/orders/${orderId}`);
  }
}
