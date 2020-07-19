import { Component, Inject } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { DownloadService } from '../service/download.service';
import { Observable } from 'rxjs';
import { Download } from '../service/download';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-charactershcp',
  styleUrls: ['hcpcharacters.component.css'],
  templateUrl: './hcpcharacters.component.html',
})
export class HCPCharactersComponent {
  ss: SharedService;
  slides = { name: 'Appetite System Animation: The GateKeeper, The GoGetter, and The SleepyExecutive (EN audio | no subtitles)', url: 'https://ocs-socmaterials.phcinc.ca/materials/ObesityCareServices/NOV20OCP020417_Appetite_System_Animated_V12_HQ_FINAL_ENG_1.mp4', videoId: 'headingOne' }

  slides1 = { name: 'Appetite System Animation: The GateKeeper, The GoGetter, and The SleepyExecutive (EN audio | EN subtitles)', url: 'https://player.vimeo.com/external/432885372.hd.mp4?s=d72993985a407f98ccf941d2701ad7aa7b9278c1&profile_id=175&download=1', videoId: 'headingFour' }

  slides2 = { name: 'Appetite System Animation: The GateKeeper, The GoGetter, and The SleepyExecutive (EN audio | FR subtitles)', url: 'https://player.vimeo.com/external/389731510.hd.mp4?s=1db5fd01a882ecf338c7f628f1fce7e4be5ffbd7&profile_id=175&download=1', videoId: 'headingTwo' }


  download$: Observable<Download>
  videoId: string;

  constructor(ss: SharedService, private downloads: DownloadService, @Inject(DOCUMENT) private document: Document, authService : AuthService) {
    this.ss = ss;
    authService.tryLogin('/HCPCharactersVideo');
    this.ss.showFooterButton();
    this.ss.setVideoLink("/hcphome");
  }

  download({ name, url, videoId }: { name: string, url: string, videoId: string }) {
    this.download$ = this.downloads.download(url, name);
    this.videoId = videoId;
  }
}
