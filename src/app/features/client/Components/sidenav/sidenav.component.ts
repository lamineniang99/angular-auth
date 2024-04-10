import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { SideNavToggle } from '../../interfaces/side-nav-toggle';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{

  @Output() onToggleSideNav : EventEmitter<SideNavToggle> = new EventEmitter()

  collapsed = false
  screenWidth = 0
  navData = navbarData

  @HostListener('window:resize', ['$event'])
  onResize(event : any){
    this.screenWidth = window.innerWidth
    if (this.screenWidth <= 768) {

      this.collapsed = false
      this.onToggleSideNav.emit({screenWidth : this.screenWidth, collapsed : this.collapsed})
    }else{
      this.collapsed = true
      this.onToggleSideNav.emit({screenWidth : this.screenWidth, collapsed : this.collapsed})
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth
  }

  toggleCollapse() : void{
    this.collapsed = !this.collapsed
    this.onToggleSideNav.emit({screenWidth : this.screenWidth, collapsed : this.collapsed})
  }

  closeSidenav() : void {
    this.collapsed = false
    this.onToggleSideNav.emit({screenWidth : this.screenWidth, collapsed : this.collapsed})

  }
}
