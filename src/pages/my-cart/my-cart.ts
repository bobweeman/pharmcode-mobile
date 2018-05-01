import { CheckoutPage } from './../checkout/checkout';
import { CartProvider } from './../../providers/cart/cart';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-cart',
  templateUrl: 'my-cart.html',
})
export class MyCartPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cart:CartProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCartPage');
  }

  goToCheckout(){
    this.navCtrl.push(CheckoutPage);
  }

}
