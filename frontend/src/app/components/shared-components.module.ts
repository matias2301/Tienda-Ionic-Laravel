import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
 
@NgModule({
  declarations: [
    HeaderComponent,    
    AuthHeaderComponent,
    FooterPageComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,    
    MatFormFieldModule,
    MatDialogModule
  ],  
  exports: [HeaderComponent, FooterPageComponent]
})
export class SharedComponentsModule { }