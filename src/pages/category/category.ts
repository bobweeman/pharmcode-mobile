import { SearchPage } from './../search/search';
import { ProductPage } from './../product/product';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ShowcartPage } from '../showcart/showcart';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  public cateoryList:Array<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverCtrl:PopoverController,
    public auth:AuthServiceProvider,
    private toastCtrl:ToastController,

  ) {
    
  }

  goToCart(){
    this.navCtrl.push(ShowcartPage);
  }

  goToProducts(id:String){
    this.navCtrl.push(ProductPage, id);
  }

  search(){
    this.navCtrl.push(SearchPage);
  }

  getCategories(){

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

}
