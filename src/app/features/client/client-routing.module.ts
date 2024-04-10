import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './Components/client/client.component';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import { AccueilComponent } from './Components/accueil/accueil.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProfilComponent } from './Components/profil/profil.component';

const routes: Routes = [
  {
    path : '' ,
    component : ClientComponent,
    children : [
      {
        path : '',
        component : AccueilComponent
      },
      {
        path : 'dashbord',
        component : DashbordComponent
      },
      {
        path : 'contact',
        component : ContactComponent
      },
      {
        path : 'profil' ,
        component : ProfilComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
