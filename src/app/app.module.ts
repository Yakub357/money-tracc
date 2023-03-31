import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard';
import { HeroComponent } from './hero/hero';
import { InputAmountComponent } from './main/input-amount/input-amount';
import { InputDateComponent } from './main/input-date/input-date';
import { InputDesignationComponent } from './main/input-designation/input-designation';
import { InputNoteComponent } from './main/input-note/input-note';
import { InputTagComponent } from './main/input-tag/input-tag';
import { InputTypeComponent } from './main/input-type/input-type';
import { MainComponent } from './main/main';
import { TransactionItemComponent } from './main/transaction-item/transaction';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroComponent,
    MainComponent,
    InputTypeComponent,
    InputDesignationComponent,
    InputAmountComponent,
    InputDateComponent,
    InputTagComponent,
    InputNoteComponent,
    TransactionItemComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
