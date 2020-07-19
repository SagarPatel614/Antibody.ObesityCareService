import { Component } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-consumer',
  styleUrls: ['consumer.component.css'],
  styles: ['.container { padding: 0px; }'],
  templateUrl: './consumer.component.html',
})
export class ConsumerComponent {

  ss: SharedService;

  constructor(ss: SharedService, authService : AuthService) {
    this.ss = ss;
   this.ss.hideFooterButton();
   this.ss.setVideoLink("/home");
  // authService.logout();
  }

}
