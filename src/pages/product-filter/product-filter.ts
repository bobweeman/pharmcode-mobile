import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ProductFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-filter',
  templateUrl: 'product-filter.html',
})
export class ProductFilterPage {
  filters:Array<any>=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl:ViewController
  ) {
    this.filters=[
      // {
      //   "name":"Free Shipping",
      //   "isChecked":false
      // },

      // { 
      //   "name":"Fulfilled by Pharmcode",
      //   "isChecked":true
      // },
      // { 
      //   "name":"In Stock",
      //   "isChecked":true
      // }
    ];
  }

  
  resetFilters() {
    // reset all of the toggles to be checked
    this.filters.forEach(track => {
      track.isChecked = true;
    });
  }

  applyFilters() {
    // Pass back a new array of track names to exclude
    this.dismiss();
  }

  dismiss(data?: any) {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductFilterPage');
  }

}
