import { ProductListPage } from './../product-list/product-list';
import { CartProvider } from './../../providers/cart/cart';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  public product =null;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: Http,
    public cart:CartProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

  addToCart(){
    this.cart.addItem(this.product);
    this.navCtrl.setRoot(ProductListPage);
  }

}
