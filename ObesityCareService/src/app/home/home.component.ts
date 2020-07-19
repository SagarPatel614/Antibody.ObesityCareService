import { Component } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  styleUrls: ['home.component.css'],
  styles: ['.container { padding: 0px; }'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  ss: SharedService;
  body: string;


  constructor(ss: SharedService, authService : AuthService) {
   this.ss = ss;
   authService.tryLogin('/hcphome');
   this.ss.hideFooterButton();
   this.ss.setVideoLink("/home");

   // this.body = escape("Hello,\n\nI am interested in receiving additional obesity support and/or would like to speak with an obesity educator to learn more. Please find my contact details below:\n\nFirst name:\nLast name:\nClinic/hospital:\nPhone number:\nBest time to contact me:\n\n ");
  //  this.body += escape("\n\nBonjour,\n\nJe souhaite obtenir du soutien supplémentaire relativement à l’obésité et/ou j’aimerais parler à un éducateur en obésité pour en savoir plus. Veuillez trouver mes coordonnées ci-dessous :\n\nPrénom :\nNom :\nClinique/hôpital :\nNuméro de téléphone : \nMeilleur moment pour communiquer avec moi : \n\n ");

  this.body = "Hello,%0D%0A%0D%0AI am interested in receiving additional obesity support and/or would like to speak with an obesity educator to learn more. Please find my contact details below:%0D%0A%0D%0AFirst name:%0D%0ALast name:%0D%0AClinic/hospital:%0D%0APhone number:%0D%0ABest time to contact me:"
  + "%0D%0A%0D%0A%0D%0A%0D%0A---------------------------------------------------------------------------------------------------------------------------------------------%0D%0A%0D%0A"
  + "Bonjour,%0D%0A%0D%0AJe souhaite obtenir du soutien supplémentaire relativement à l’obésité et/ou j’aimerais parler à un éducateur en obésité pour en savoir plus. Veuillez trouver mes coordonnées ci-dessous :%0D%0A%0D%0APrénom :%0D%0ANom :%0D%0AClinique/hôpital :%0D%0ANuméro de téléphone : %0D%0AMeilleur moment pour communiquer avec moi : %0D%0A%0D%0A ";
  }
}
