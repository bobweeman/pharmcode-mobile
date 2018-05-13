import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AddStockPage } from '../add-stock/add-stock';
import { PharmacyPage } from '../pharmacy/pharmacy';
import { PopOverPage } from '../pop-over/pop-over';

/**
 * Generated class for the StockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stock',
  templateUrl: 'stock.html',
})
export class StockPage {

  stock:any;  
  showCards:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider, private modalCtrl: ModalController, private toaster: ToastController, public popoverCtrl:PopoverController) {

      this.getUserStock();    
  }

  // stocking shop page
  stockShop(){
    this.navCtrl.push(AddStockPage);
  }

  presentPopover(myEvent:Event) {
    let popover = this.popoverCtrl.create(PopOverPage);
    popover.present({
      ev: myEvent
    });
  }

 
  
  getUserStock(){
    this.auth.getSingle('my_stock',localStorage.getItem('logUserId'),localStorage.getItem('jwt'))
    .subscribe((response)=>{
      if(response['data'].length == 0){
        let message=this.toaster.create({
          message: 'You have no items in stock',
          duration:8000,
          dismissOnPageChange:true,
          position:'top'
        });
        message.present(); 
      }else{
        this.showCards=true;
        this.stock = response['data'];
      }
    },(error=>{
      let message = this.toaster.create({
        message: 'Service not available',
        duration: 8000,
        dismissOnPageChange: true,
        position: 'top'
      });
      message.present();
    }));
  }

}
