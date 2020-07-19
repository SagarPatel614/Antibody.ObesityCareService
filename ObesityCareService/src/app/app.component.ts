import { Component, OnInit } from '@angular/core';
import {SharedService} from './service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Obesity CARE Service';
  isFooterBtnVisible: Boolean;
  link:string;
  ss: SharedService;

  constructor(ss: SharedService) {
    this.ss = ss;
  }

  ngOnInit() {
    this.ss.getEmittedValue().subscribe(val => this.isFooterBtnVisible = val);
    this.ss.getlink().subscribe(val => this.link = val);
  }
}
