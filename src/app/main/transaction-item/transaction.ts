import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction.html',
  styleUrls: ['./transaction.css'],
})
export class TransactionItemComponent {
  @Input() transaction: {
    date: string;
    designation: string;
    type: string;
    tag: string;
    note: string;
    amount: number;
    currency: string;
  };
}
