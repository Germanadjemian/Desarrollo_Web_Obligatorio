import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaAdminLogInComponent } from './pantalla-admin-log-in/pantalla-admin-log-in.component';
import { PantallaUserAdminComponent } from './pantalla-user-admin/pantalla-user-admin.component';
import { PantallaUserPinComponent } from './pantalla-user-pin/pantalla-user-pin.component';
import { PantallaAdminCreateThingsComponent } from './pantalla-admin-create-things/pantalla-admin-create-things.component';
import { PantallaAdminNewAccountComponent } from './pantalla-admin-new-account/pantalla-admin-new-account.component';
import { PantallaCreateActivityComponent } from './pantalla-create-activity/pantalla-create-activity.component';
import { PantallaProposalComponent } from './pantalla-proposal/pantalla-proposal.component';
import { PantallaGameComponent } from './pantalla-game/pantalla-game.component';
import { PantallaLobbyComponent } from './pantalla-lobby/pantalla-lobby.component';

const routes: Routes = [
  {path: '',component: PantallaUserAdminComponent},
  { path: 'admin', component: PantallaAdminLogInComponent },
  { path: 'user', component: PantallaUserPinComponent },
  { path: 'create', component: PantallaAdminCreateThingsComponent },
  { path: 'adminNewAccount', component: PantallaAdminNewAccountComponent },
  {path: 'activity',component: PantallaCreateActivityComponent},
  {path: 'proposal', component: PantallaProposalComponent},
  {path: 'game', component:PantallaGameComponent},
  {path: 'lobby', component:PantallaLobbyComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
