import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core';

@Injectable()
export class SharedService {
  @Output() show: EventEmitter<boolean> = new EventEmitter();
  @Output() link: EventEmitter<string> = new EventEmitter();

   constructor() {}

   showFooterButton() {
     this.show.emit(true);
   }

   hideFooterButton() {
    this.show.emit(false);
  }

   setVideoLink(link) {
    this.link.emit(link);
  }

   getEmittedValue() {
     return this.show;
   }

   getlink() {
    return this.link;
  }
}
