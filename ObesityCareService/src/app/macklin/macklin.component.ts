import { Component } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-macklin',
  styleUrls: ['macklin.component.css'],
  templateUrl: './macklin.component.html',
})
export class MacklinComponent {
  ss: SharedService;

  constructor(ss: SharedService, authService : AuthService) {
    this.ss = ss;
    authService.tryLogin('/MacklinSeries');
    this.ss.showFooterButton();
    this.ss.setVideoLink("/hcphome");
  }
}
