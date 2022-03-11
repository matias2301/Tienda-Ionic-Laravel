import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    public toastController: ToastController,
  ) { }

  async showToast( msg: string, color: string ){

    const toast = await this.toastController.create({
      message: msg,
      duration: 5000,
      position: 'top',
      color: color
    });

    toast.present();
  }
}
