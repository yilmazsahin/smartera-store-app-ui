import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './components/customers/customers.component';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'customers', component: CustomersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersComponent,
    OrdersComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
