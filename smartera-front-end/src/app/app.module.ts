import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './components/customers/customers.component';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
import { DeleteOrderComponent } from './components/delete-order/delete-order.component';
const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'new-customer', component: NewCustomerComponent },
  { path: 'edit-customer', component: EditCustomerComponent },
  { path: 'delete-customer', component: DeleteCustomerComponent },
  { path: 'new-order', component: NewOrderComponent },
  { path: 'edit-order', component: EditOrderComponent },
  { path: 'delete-order', component: DeleteOrderComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersComponent,
    OrdersComponent,
    NewCustomerComponent,
    EditCustomerComponent,
    DeleteCustomerComponent,
    NewOrderComponent,
    EditOrderComponent,
    DeleteOrderComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
