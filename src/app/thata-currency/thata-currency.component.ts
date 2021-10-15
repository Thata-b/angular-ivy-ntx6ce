import { Component, OnInit } from '@angular/core';
import { ThataWalletService } from '../thata-wallet.service';

@Component({
  selector: 'app-thata-currency',
  templateUrl: './thata-currency.component.html',
  styleUrls: ['./thata-currency.component.css']
})
export class ThataCurrencyComponent implements OnInit {

  constructor(public wallet: ThataWalletService) {
    
   }

  ngOnInit() {
  }

}