import { Component } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-vallis-component',
  templateUrl: './vallis.component.html',
  styleUrls: ['vallis.component.css'],
})
export class VallisComponent {
  ss: SharedService;

  constructor(ss: SharedService, authService : AuthService) {
    this.ss = ss;
    authService.tryLogin('/VallisSeries');
    this.ss.showFooterButton();
    this.ss.setVideoLink("/hcphome");
  }
}
