import { Component, VERSION } from '@angular/core';
import { ThataWalletService } from './thata-wallet.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  constructor(public wallet: ThataWalletService){}
}
