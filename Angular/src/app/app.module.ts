import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaUserAdminComponent } from './pantalla-user-admin/pantalla-user-admin.component';
import { PantallaAdminLogInComponent } from './pantalla-admin-log-in/pantalla-admin-log-in.component';
import { PantallaUserPinComponent } from './pantalla-user-pin/pantalla-user-pin.component';
import { PantallaAdminCreateThingsComponent } from './pantalla-admin-create-things/pantalla-admin-create-things.component';
import { PantallaAdminNewAccountComponent } from './pantalla-admin-new-account/pantalla-admin-new-account.component';
import { PantallaCreateActivityComponent } from './pantalla-create-activity/pantalla-create-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    PantallaUserAdminComponent,
    PantallaAdminLogInComponent,
    PantallaUserPinComponent,
    PantallaAdminCreateThingsComponent,
    PantallaAdminNewAccountComponent,
    PantallaCreateActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
