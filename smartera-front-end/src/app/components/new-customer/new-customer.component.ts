import { ApiService } from './../../services/api.service';
import { Customer } from './../../common/customer';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css',
})
export class NewCustomerComponent {
  customer: any = {};
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}
  saveCustomer() {
    this.apiService.createCustomer(this.customer)
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
  handleSuccesfulSavedCustomer() {
    let result = this.router.navigate(['customers']);
    console.log(result);
  }
}

