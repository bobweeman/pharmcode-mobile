import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, PopoverController } from 'ionic-angular';
import { StockPage } from '../stock/stock';
import { OrdersPage } from '../orders/orders';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the PharmacyTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pharmacy-tabs',
  templateUrl: 'pharmacy-tabs.html',
})
export class PharmacyTabsPage {

  tab1Root = StockPage;
  tab2Root = OrdersPage;
  tab3Root = SettingsPage;


  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider, private modalCtrl: ModalController, private toaster: ToastController, public popoverCtrl: PopoverController) {
    this.checkForPharmacy();

  }


  // checking if pharmacist has a pharmacy
  checkForPharmacy() {
    this.auth.getSingle('check_pharmacy', localStorage.getItem('logUserID'), localStorage.getItem('jwt'))
      .subscribe((result) => {
        if (result['data'].length == 0) {
          let message = this.toaster.create({
            message: 'Please create a pharmacy to continue',
            duration: 5000,
            dismissOnPageChange: false,
            position: 'top'
          });
          message.present();
          this.navCtrl.setRoot("PharmacyPage");
        } 
      }, (error => {
        let message = this.toaster.create({
          message: 'Service not available',
          duration: 8000,
          dismissOnPageChange: true,
          position: 'top'
        });
        message.present();
      }));
  }

}
