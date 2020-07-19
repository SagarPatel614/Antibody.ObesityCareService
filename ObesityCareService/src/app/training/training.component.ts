import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html'
})
export class TrainingComponent {
  ss: SharedService;

  constructor(ss: SharedService) {
    this.ss = ss;
    this.ss.showFooterButton();
    this.ss.setVideoLink("/hcphome");
  }
}
