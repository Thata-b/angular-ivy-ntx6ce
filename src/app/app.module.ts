import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ThataCurrencyComponent } from './thata-currency/thata-currency.component';
import { ThataWalletComponent } from './thata-wallet/thata-wallet.component';
import { RouterModule } from '@angular/router';
import { ThataWalletService } from './thata-wallet.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ 
    HttpClientModule,
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(
      [
        {path: 'currency', component: ThataCurrencyComponent},
        {path: 'wallet', component: ThataWalletComponent},
      ]
    )
  ],
  declarations: [ AppComponent, HelloComponent, ThataCurrencyComponent, ThataWalletComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ThataWalletService]
})
export class AppModule { }