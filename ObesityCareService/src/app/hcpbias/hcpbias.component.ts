import { Component, Inject } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { DownloadService } from '../service/download.service';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import { Download } from '../service/download';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-hcpbias',
  styleUrls: ['hcpbias.component.css'],
  templateUrl: './hcpbias.component.html',
})
export class HCPBiasComponent {
  ss: SharedService;

  slides1 = { name: 'Bias and Obesity Quickdraw (EN audio | no subtitles)', url: 'https://player.vimeo.com/external/281875867.hd.mp4?s=8da91fc6ae3a06d1432d5be5676eefd3a204e0a8&profile_id=175&download=1', videoId: 'headingOne' }
  slides2 = { name: 'Bias and Obesity Quickdraw (EN audio | EN subtitles)', url: 'https://player.vimeo.com/external/434118809.source.mp4?s=78c00873d0dff4fdc4827213fe99718806a20315&download=1', videoId: 'headingTwo' }
  slides3 = { name: 'Bias and Obesity Quickdraw (EN audio | FR subtitles)', url: 'https://player.vimeo.com/external/345691901.hd.mp4?s=ba9b88eb1646abfb0a9f6bdaff0d89dd031156a5&profile_id=175&download=1', videoId: 'headingThree' }

  download$: Observable<Download>
  videoId: string;

  constructor(ss: SharedService, private downloads: DownloadService, @Inject(DOCUMENT) private document: Document, authService : AuthService) {
    this.ss = ss;
    authService.tryLogin('/HCPBiasVideo');
    this.ss.showFooterButton();
    this.ss.setVideoLink("/hcphome");
  }

  download({ name, url, videoId }: { name: string, url: string, videoId: string }) {
    this.download$ = this.downloads.download(url, name);
    this.videoId = videoId;
  }
}
