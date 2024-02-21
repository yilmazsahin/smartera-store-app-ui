import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Customer } from '../common/customer';
import { Order } from '../common/order.spec';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'http://localhost:8081/api';
  ordersApiUrl = 'http://localhost:8081/api/orders';
  customersApiUrl = 'http://localhost:9091/api/customers';
  httpClient: any;
  baseUrl: any;
  constructor(private http: HttpClient, private authService: AuthService) {}
  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.customersApiUrl}/getAllCustomers`);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.ordersApiUrl}/getAllOrders`);
  }
  createCustomer(customerData: any): Observable<any> {
    return this.http.post(`${this.customersApiUrl}/saveCustomer`, customerData);
  }
  updateCustomer(customerId: number, customerData: any): Observable<any> {
    return this.http.put(
      `${this.customersApiUrl}/updateCustomerById/${customerId}`,
      customerData
    );
  }
  getOrderById(orderId: number): Observable<any> {
    return this.http.get(`${this.ordersApiUrl}/getOrderById/${orderId}`);
  }
  deleteCustomer(customerId: number): Observable<any> {
    return this.http.delete(`${this.customersApiUrl}/${customerId}`);
  }
  getCustomerById(customerId: number): Observable<any> {
    return this.http.get(
      `${this.customersApiUrl}/getCustomerById/${customerId}`
    );
  }
  createOrder(orderData: any): Observable<any> {
    return this.http.post(`${this.ordersApiUrl}`, orderData);
  }
  updateOrder(orderId: number, orderData: any): Observable<any> {
    return this.http.put(
      `http://localhost:8081/api/orders/${orderId}`,
      orderData
    );
  }
  deleteOrder(orderId: number): Observable<any> {
    if (orderId === undefined) {
      console.error('Order ID is undefined');
      return of(null);
    }
    return this.http.delete(`${this.ordersApiUrl}/deleteOrderById/${orderId}`);
  }
  getOrdersByCustomerId(customerId: number): Observable<any> {
    return this.http.get(`${this.ordersApiUrl}/${customerId}`);
  }
}
