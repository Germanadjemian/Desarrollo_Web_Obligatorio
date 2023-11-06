import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaAdminLogInComponent } from './pantalla-admin-log-in/pantalla-admin-log-in.component';
import { PantallaUserAdminComponent } from './pantalla-user-admin/pantalla-user-admin.component';
import { PantallaUserPinComponent } from './pantalla-user-pin/pantalla-user-pin.component';
import { PantallaAdminCreateThingsComponent } from './pantalla-admin-create-things/pantalla-admin-create-things.component';
import { PantallaAdminNewAccountComponent } from './pantalla-admin-new-account/pantalla-admin-new-account.component';
import { PantallaCreateActivityComponent } from './pantalla-create-activity/pantalla-create-activity.component';

const routes: Routes = [
  {path: 'inicial',component: PantallaUserAdminComponent},
  { path: 'admin', component: PantallaAdminLogInComponent },
  { path: 'user', component: PantallaUserPinComponent },
  { path: 'inicioSesion', component: PantallaAdminCreateThingsComponent },
  { path: 'adminNewAccount', component: PantallaAdminNewAccountComponent },
  {path: 'activity',component: PantallaCreateActivityComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
