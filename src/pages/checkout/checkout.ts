import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartProvider } from "../../providers/cart/cart";
import 'rxjs/add/operator/toPromise';
import { Http, Headers, RequestOptions } from "@angular/http";

declare var PagSeguroDirectPayment;
/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
   
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  
 

}
