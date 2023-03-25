import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard';
import { HeroComponent } from './hero/hero';
import { MainComponent } from './main/main';

@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent, 
    HeroComponent, 
    MainComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
