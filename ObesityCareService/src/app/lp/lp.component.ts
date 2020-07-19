import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-lp',
  styleUrls: ['lp.component.css'],
  templateUrl: './lp.component.html',
})
export class LPComponent {
  ss: SharedService;



  constructor(ss: SharedService, authService : AuthService) {
    this.ss = ss;
    this.ss.hideFooterButton();
    this.ss.setVideoLink("/home");
   // authService.logout();
  }

}

