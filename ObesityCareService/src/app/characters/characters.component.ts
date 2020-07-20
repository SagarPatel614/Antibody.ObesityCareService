import { Component, Injectable, Inject } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { scan } from 'rxjs/internal/operators/scan';
import { Download } from '../service/download';
import { DownloadService } from '../service/download.service';
import { DOCUMENT } from '@angular/common';
//const FileSaver = require('file-saver');

@Component({
  selector: 'app-characters',
  styleUrls: ['characters.component.css'],
  templateUrl: './characters.component.html',
})

export class CharactersComponent {
  ss: SharedService;
  slides = { name: 'Appetite System Animation: The GateKeeper, The GoGetter, and The SleepyExecutive (EN audio | no subtitles)', url: 'https://player.vimeo.com/external/389731510.hd.mp4?s=1db5fd01a882ecf338c7f628f1fce7e4be5ffbd7&profile_id=175&download=1', videoId: 'headingOne' }

  slides2 = { name: 'Appetite System Animation: The GateKeeper, The GoGetter, and The SleepyExecutive (EN audio | FR subtitles)', url: 'https://player.vimeo.com/external/389731510.hd.mp4?s=1db5fd01a882ecf338c7f628f1fce7e4be5ffbd7&profile_id=175&download=1', videoId: 'headingTwo' }

  download$: Observable<Download>
  videoId: string;

  constructor(ss: SharedService, private downloads: DownloadService, @Inject(DOCUMENT) private document: Document) {
    this.ss = ss;
    this.ss.showFooterButton();
    this.ss.setVideoLink("/consumerhome");
  }

  download({ name, url, videoId }: { name: string, url: string, videoId: string }) {
    this.download$ = this.downloads.download(url, name);
    this.videoId = videoId;
  }

}
