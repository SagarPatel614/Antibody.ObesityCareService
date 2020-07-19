import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { VallisComponent } from './vallis/vallis.component';
import { TrainingComponent } from './training/training.component';
import { MacklinComponent } from './macklin/macklin.component';
import { BiasComponent } from './bias/bias.component';
import { CharactersComponent } from './characters/characters.component';
import { LPComponent } from './lp/lp.component';
import { ConsumerComponent } from './consumerhomepage/consumer.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth-guard.service';
import { HCPCharactersComponent } from './charactershcp/hcpcharacters.component';
import { HCPBiasComponent } from './hcpbias/hcpbias.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LPComponent
  },
  {path: 'home', redirectTo: "/", pathMatch: 'full'},
  {path: 'hcphome', component: HomeComponent, pathMatch: 'full'},
  {path: 'consumerhome', component: ConsumerComponent, pathMatch: 'full'},
  { path: 'MacklinSeries', component: MacklinComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'VallisSeries', component: VallisComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'BiasVideo', component: BiasComponent, pathMatch: 'full'},
  { path: 'HCPBiasVideo', component: HCPBiasComponent, pathMatch: 'full'},
  { path: 'CharactersVideo', component: CharactersComponent, pathMatch: 'full' },
  { path: 'HCPCharactersVideo', component: HCPCharactersComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'Training', component: TrainingComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, pathMatch: 'full'}
];
