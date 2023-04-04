import { Component } from '@angular/core';
import { TransactionModel } from './transaction.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: ['./main.css'],
})
export class MainComponent {
  transactions: TransactionModel[] = [
    new TransactionModel(
      '19 Mar',
      'Wallet Alice',
      'expense',
      'Restaurant',
      'visa',
      600,
      'USD'
    ),
    new TransactionModel(
      '1 Mar',
      'Wallet John',
      'income',
      'salary',
      'master card',
      12000,
      'EUR'
    ),

    new TransactionModel(
      '12 Mar',
      'Car Loan',
      'transfer',
      'savings',
      'visa',
      800,
      'USD'
    ),
    new TransactionModel(
      '2 April',
      'Wallet Alice',
      'expense',
      'H Bar',
      'Humo card',
      200,
      'CNY'
    ),
  ];

  mainTransactionType: string = '';

  onSubmit(eventData: any) {
    console.log(eventData);
  }
}
