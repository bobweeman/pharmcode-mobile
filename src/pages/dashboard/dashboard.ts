import { ScanQrcodePage } from './../scan-qrcode/scan-qrcode';
import { AccountPage } from './../account/account';
import { ShowcartPage } from './../showcart/showcart';
import { CategoryPage } from './../category/category';
import { HomePage } from './../home/home';
import { SettingsPage } from './../settings/settings';
import { OrdersPage } from './../orders/orders';
import { StockPage } from './../stock/stock';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  tab1Root = HomePage;
  tab2Root = ScanQrcodePage;
  tab3Root = CategoryPage;
  tab4Root = ShowcartPage;
  tab5Root = AccountPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
