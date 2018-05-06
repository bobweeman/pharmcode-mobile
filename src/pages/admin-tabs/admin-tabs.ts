import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StockPage } from '../stock/stock';
import { OrdersPage } from '../orders/orders';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the AdminTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-tabs',
  templateUrl: 'admin-tabs.html',
})
export class AdminTabsPage {

  tab1Root = StockPage;
  tab2Root = OrdersPage;
  tab3Root = SettingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
