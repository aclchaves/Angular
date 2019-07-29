import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaiComponentComponent } from './pai-component/pai-component.component';
import { FilhoComponent } from './filho/filho.component';
import { StockComponent } from './stock/stock.component';
import { StockStatusComponent } from './stock-status/stock-status.component';

@NgModule({
  declarations: [
    AppComponent,
    PaiComponentComponent,
    FilhoComponent,
    StockComponent,
    StockStatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
