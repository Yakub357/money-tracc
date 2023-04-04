import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-input-type',
  templateUrl: './input-type.html',
  styleUrls: ['./input-type.css'],
})
export class InputTypeComponent {
  @Output('transType') transactionType: string = 'income';
}
