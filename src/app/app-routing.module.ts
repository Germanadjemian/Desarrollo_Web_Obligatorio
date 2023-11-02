import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaAdminLogInComponent } from './pantalla-admin-log-in/pantalla-admin-log-in.component';
import { PantallaUserAdminComponent } from './pantalla-user-admin/pantalla-user-admin.component';
import { PantallaUserPinComponent } from './pantalla-user-pin/pantalla-user-pin.component';
import { PantallaAdminCreateThingsComponent } from './pantalla-admin-create-things/pantalla-admin-create-things.component';

const routes: Routes = [
  {path: 'inicial',component: PantallaUserAdminComponent},
  { path: 'admin', component: PantallaAdminLogInComponent },
  { path: 'user', component: PantallaUserPinComponent },
  { path: 'inicioSesion', component: PantallaAdminCreateThingsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
