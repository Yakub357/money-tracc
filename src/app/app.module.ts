import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard';
import { HeroComponent } from './hero/hero';
import { MainComponent } from './main/main';
import { TransactionItemComponent } from './main/transaction-item/transaction';
import { FormComponent } from './main/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroComponent,
    MainComponent,
    TransactionItemComponent,
    FormComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
