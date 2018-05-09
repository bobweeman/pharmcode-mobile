import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


}
