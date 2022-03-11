import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
import { IonicModule } from '@ionic/angular';

import { SocialLoginModule, SocialAuthServiceConfig, FacebookLoginProvider } from "angularx-social-login";
import { MenuPageRoutingModule } from './menu-routing.module';
 
import { MenuPage } from './menu.page';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { MenuListItemComponent } from '../../components/menu-list-item/menu-list-item.component';
import { FooterComponent } from '../../components/footer/footer.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    SharedComponentsModule,       
    MatIconModule,    
    MatListModule,
    SocialLoginModule
  ],  
  declarations: [
    MenuPage,
    MenuListItemComponent,
    FooterComponent
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',      
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '1839907482837482'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }    
  ],
})
export class MenuPageModule {}