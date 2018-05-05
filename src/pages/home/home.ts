import { WishlistPage } from './../wishlist/wishlist';
import { ShowcartPage } from './../showcart/showcart';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ScanQrcodePage } from './../scan-qrcode/scan-qrcode';
import { SearchPage } from './../search/search';
import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scannedCode=null;

  constructor(public navCtrl: NavController, public app: App,private barcodeScanner:BarcodeScanner,private photoLibrary:PhotoLibrary) {

  }

  search(){
    this.navCtrl.push(SearchPage);
  }

  openCart(){
    this.navCtrl.push(ShowcartPage);
  }

  openWishlist(){
    this.navCtrl.push(WishlistPage);
  }

  openList(){
    this.navCtrl.push(ListPage);
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData=>{
      this.scannedCode=barcodeData.text;
    })
  }


 photoLib(){
  this.photoLibrary.requestAuthorization().then(() => {
    this.photoLibrary.getLibrary().subscribe({
      next: library => {
        library.forEach(function(libraryItem) {
          console.log(libraryItem.id);          // ID of the photo
          console.log(libraryItem.photoURL);    // Cross-platform access to photo
          console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
          console.log(libraryItem.fileName);
          console.log(libraryItem.width);
          console.log(libraryItem.height);
          console.log(libraryItem.creationDate);
          console.log(libraryItem.latitude);
          console.log(libraryItem.longitude);
          console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
        });
      },
      error: err => { console.log('could not get photos'); },
      complete: () => { console.log('done getting photos'); }
    });
  })
  .catch(err => console.log('permissions weren\'t granted'));
 }


}
