import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StockPage } from '../stock/stock';
import { OrdersPage } from '../orders/orders';
import { SettingsPage } from '../settings/settings';
import { PharmPage } from '../pharm/pharm';
import { UsersPage } from '../users/users';
import { StatisticsPage } from '../statistics/statistics';
import { DrugCategoryPage } from '../drug-category/drug-category';

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

  tab1Root = PharmPage;
  tab2Root = DrugCategoryPage;
  tab3Root = UsersPage;
  tab4Root = StatisticsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
