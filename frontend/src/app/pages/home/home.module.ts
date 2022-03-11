import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedComponentsModule } from '../../components/shared-components.module';

import { HomePage } from './home.page';
import { SlidesComponent } from '../../components/slides/slides.component';
import { DividerComponent } from '../../components/divider/divider.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { CardDetailsComponent } from '../../components/card-details/card-details.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    HomePage,
    SlidesComponent,
    DividerComponent,
    CardsComponent,
    CardDetailsComponent 
  ]
})
export class HomePageModule {}
