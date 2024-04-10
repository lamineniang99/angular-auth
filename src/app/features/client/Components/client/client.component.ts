import { Component } from '@angular/core';
import { SideNavToggle } from '../../interfaces/side-nav-toggle';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  isSideNavCollapsed = false
  screenWidth = 0

  onToggleSideNav(data : SideNavToggle) : void{
    this.isSideNavCollapsed = data.collapsed
    this.screenWidth = data.screenWidth
  }
}
