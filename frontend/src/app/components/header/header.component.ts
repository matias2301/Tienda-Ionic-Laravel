import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
 
  @Input() title: string;

  dropdown: boolean = false;
  userRole: string;
  menuLogin: boolean = false;
 
  @ViewChild('productbtn', { read: ElementRef })productbtn: ElementRef;

  constructor(
    private _categoriesService: CategoriesService
  ) { }
 
  ngOnInit() {}
 
  hideDropdown(event) {
    const xTouch = event.clientX;
    const yTouch = event.clientY;
    
    const rect = this.productbtn.nativeElement.getBoundingClientRect();
    const topBoundary = rect.top+2;
    const leftBoundary = rect.left+2;
    const rightBoundary = rect.right-2;
 
    if (xTouch < leftBoundary || xTouch > rightBoundary || yTouch < topBoundary) {      
      this.dropdown = false;
    }
  }

  setCategory(category: string){
    this.dropdown = false;
    this._categoriesService.setCategory(category);
  }
  setUserRole(role: string){    
    this.userRole = role;
  }
  setShowLogin(showLogin: boolean){    
    this.menuLogin = showLogin;    
  }
}