import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.css',
})
export class EditOrderComponent implements OnInit {

  selectedCustomerId: any;
  customers: any[] = [];
  order: any = {};
  orders: any[] = [];
  selectedOrderId: any;
  originalOrderTrackingNumber: string =this.order.orderTrackingNumber ;

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadCustomers();
    this.loadOrders();
    // this.originalOrderTrackingNumber = this.order.orderTrackingNumber;
    // // this.getOrderTrackingNumber(this.selectedOrderId);
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
  loadOrders() {
    this.apiService
      .getOrders()
      .pipe(
        tap((data) => {
          this.orders = data;
        }),
        catchError((error) => {
          console.error('Error loading Orders: ', error);
          return of(null);
        })
      )
      .subscribe();
  }

  editOrder() {
    this.order.orderTrackingNumber = this.originalOrderTrackingNumber;
    this.order.customerId = this.selectedCustomerId;
    if (this.selectedOrderId !== null) {
      this.apiService
        .updateOrder(this.selectedOrderId, this.order)
        .pipe(
          catchError((error) => {
            console.error('Error editing order: ', error);
            return of(null);
          })
        )
        .subscribe((response) => {
          if (response) {
            console.log('Order edited successfully: ', response);
            this.router.navigate(['orders']);
          }
        });
    }
  }
  // getOrderTrackingNumber(selectedOrderId: number):string {
  //   const selectedOrder = this.orders.find(order => order.id === selectedOrderId);
  //   if (!selectedOrder || !selectedOrder.orderTrackingNumber) {
  //     return 'No data';
  //   }
  //   return selectedOrder.orderTrackingNumber;
  // }
}


