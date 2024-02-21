import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css',
})
export class EditCustomerComponent implements OnInit {
  customers: any[] = [];
  customer: any = {};
  selectedCustomerId: any;
  customerService: any;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
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
  editCustomer() {
    if (this.selectedCustomerId !== null) {
      this.apiService
        .updateCustomer(this.selectedCustomerId, this.customer)
        .pipe(
          catchError((error) => {
            console.error('Error adding customer:', error);
            return of(null);
          })
        )
        .subscribe((response) => {
          if (response) {
            console.log('Customer added successfully:', response);
            this.router.navigate(['customers']);
          }
        });
    }
  }

}

