import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrl: './new-order.component.css',
})
export class NewOrderComponent implements OnInit {
  order: any = { customer_id: null };
  selectedCustomerId: any;
  customers: any[] = [];
  customer: any = {};
  customerId: any;
  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadCustomers();
  }
  loadCustomers() {
    this.apiService
      .getAllCustomers()
      .pipe(
        tap((data) => {
          this.customers = data;
        }),
        catchError((error) => {
          console.error('Error loading customers:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  saveOrder() {
    this.order.customerId = this.selectedCustomerId;
    this.apiService
      .createOrder(this.order)
      .pipe(
        catchError((error) => {
          console.error('Error adding Order: ', error);
          return of(null);
        })
      )
      .subscribe((response) => {
        console.log('Order added successfully: ', response);
        this.router.navigate(['orders']);
      });
  }
}
