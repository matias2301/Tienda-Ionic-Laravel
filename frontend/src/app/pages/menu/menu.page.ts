import { Component, HostListener, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

import { menu } from '../../interfaces/menu';
import { NavItem } from '../../interfaces/navItem';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public menu: NavItem[] = menu;
 
  title = 'Home';
 
  constructor(private menuCtrl: MenuController, private plt: Platform) { }
 
  ngOnInit() {
    const width = this.plt.width();
    this.toggleMenu(width);
  }
 
  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    const newWidth = event.target.innerWidth;
    this.toggleMenu(newWidth);
  }
 
  toggleMenu(width) {
    if (width > 768) {
      this.menuCtrl.enable(false, 'myMenu');
    } else {
      this.menuCtrl.enable(true, 'myMenu');
    }
  }
 
  setTitle(title) {    
    this.title = title
  }
  
}
