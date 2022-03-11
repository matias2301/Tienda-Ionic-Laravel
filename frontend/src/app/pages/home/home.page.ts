import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  divider_bienvenida = "Bienvenido a Tienda Maylu";
  divider_products = "Conozca nuestros productos";
  filter: string;

  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(
    private _categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    var cardElement = document.getElementById('cards');

    this._categoriesService.categorySelected.subscribe( category => {
      if( category ){           
        this.filter = category;
        this.content.scrollToPoint(0, cardElement.offsetTop, 1000);
      }
    })
  }

}
