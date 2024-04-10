import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './Components/client/client.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { BodyComponent } from './Components/body/body.component';
import { AccueilComponent } from './Components/accueil/accueil.component';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProfilComponent } from './Components/profil/profil.component';


@NgModule({
  declarations: [
    ClientComponent,
    SidenavComponent,
    BodyComponent,
    AccueilComponent,
    DashbordComponent,
    ContactComponent,
    ProfilComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
