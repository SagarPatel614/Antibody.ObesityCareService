import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ClipboardModule } from 'ngx-clipboard';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { VallisComponent } from './vallis/vallis.component';
import { TrainingComponent } from './training/training.component';
import { MacklinComponent } from './macklin/macklin.component';
import { appRoutes } from './routes';
import { MaterialModule } from './module/material.module';
import { SharedService } from './service/shared.service';
import { BiasComponent } from './bias/bias.component';
import { CharactersComponent } from './characters/characters.component';
import { LPComponent } from './lp/lp.component';
import { ConsumerComponent } from './consumerhomepage/consumer.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth-guard.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './service/auth.service';
import { HCPCharactersComponent } from './charactershcp/hcpcharacters.component';
import { DownloadService } from './service/download.service';

import { SAVER, getSaver } from './service/saver.provider'
import { HCPBiasComponent } from './hcpbias/hcpbias.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    VallisComponent,
    TrainingComponent,
    MacklinComponent,
    BiasComponent,
    CharactersComponent,
    LPComponent,
    ConsumerComponent,
    LoginComponent,
    HCPCharactersComponent,
    HCPBiasComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    MaterialModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    RouterModule.forRoot(appRoutes)
  ],
  // providers: [SharedService],
  providers: [SharedService, DownloadService, AuthGuard, CookieService,
    {
      provide: {HTTP_INTERCEPTORS, SAVER},
      useClass: AuthService,
      multi: true
    },
    {
      provide: SAVER,
      useFactory: getSaver
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
