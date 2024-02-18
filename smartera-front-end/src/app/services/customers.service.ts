import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../common/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private baseUrl = 'http://localhost:8080/api/customers';

  constructor(private httpClient: HttpClient) {}

  getCustomers():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseUrl}/getAllCustomers`);
  }
}
