export class Order {
  billingAddress!: string;
  shippingAddress!: string;
  dateCreated!: Date;
  lastUpdated!: Date;
  orderTrackingNumber!: string;
  totalPrice!: number;
  totalQuantity!: number;
  customerId!: number;
}
