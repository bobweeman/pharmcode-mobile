import { CheckoutPage } from './../checkout/checkout';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowcartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showcart',
  templateUrl: 'showcart.html',
})
export class ShowcartPage {
  quantity:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.quantity=1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowcartPage');
  }

  goToCheckout(){
    this.navCtrl.push(CheckoutPage);
  }

}
