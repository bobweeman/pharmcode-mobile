import { Camera } from '@ionic-native/camera';
import { PopOverPage } from './../pop-over/pop-over';
import { WishlistPage } from './../wishlist/wishlist';
import { ShowcartPage } from './../showcart/showcart';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ScanQrcodePage } from './../scan-qrcode/scan-qrcode';
import { Component } from '@angular/core';
import { NavController, App, PopoverController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scannedCode=null;
  base64Image:any;

  constructor(public navCtrl: NavController, 
    public app: App,
    private barcodeScanner:BarcodeScanner,
    private photoLibrary:PhotoLibrary,
    public popoverCtrl:PopoverController,
    public camera:Camera

  ) {

  }

 
  openCart(){
    this.navCtrl.push(ShowcartPage);
  }

  presentPopover(myEvent:Event) {
    let popover = this.popoverCtrl.create(PopOverPage);
    popover.present({
      ev: myEvent
    });
  }

  openList(){
    this.navCtrl.push(ListPage);
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData=>{
      this.scannedCode=barcodeData.text;
    })
  }



 accessGallery(){
  this.camera.getPicture({
    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
    destinationType: this.camera.DestinationType.DATA_URL
   }).then((imageData) => {
     this.base64Image = 'data:image/jpeg;base64,'+imageData;
    }, (err) => {
     console.log(err);
   }); 
 }

}
