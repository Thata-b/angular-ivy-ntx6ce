import { Component, OnInit } from '@angular/core';
import { ThataWalletService } from '../thata-wallet.service';

@Component({
  selector: 'app-thata-wallet',
  templateUrl: './thata-wallet.component.html',
  styleUrls: ['./thata-wallet.component.css']
})
export class ThataWalletComponent implements OnInit {

  constructor(public wallet: ThataWalletService) {
    
  }

  ngOnInit() {
  }

}