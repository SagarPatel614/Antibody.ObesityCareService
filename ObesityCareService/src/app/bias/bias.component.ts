import { Component, Inject } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { Observable } from 'rxjs';
import { Download } from '../service/download';
import { DownloadService } from '../service/download.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-bias',
  styleUrls: ['bias.component.css'],
  templateUrl: './bias.component.html',
})
export class BiasComponent {
  ss: SharedService;

  slides1 = { name: 'Bias and Obesity Quickdraw (EN audio | no subtitles)', url: 'https://player.vimeo.com/external/281875867.hd.mp4?s=8da91fc6ae3a06d1432d5be5676eefd3a204e0a8&profile_id=175&download=1', videoId: 'headingOne' }
  slides2 = { name: 'Bias and Obesity Quickdraw (EN audio | FR subtitles)', url: 'https://player.vimeo.com/external/345691901.hd.mp4?s=ba9b88eb1646abfb0a9f6bdaff0d89dd031156a5&profile_id=175&download=1', videoId: 'headingTwo' }

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
