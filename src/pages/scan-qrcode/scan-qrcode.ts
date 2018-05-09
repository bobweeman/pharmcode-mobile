import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoLibrary } from '@ionic-native/photo-library';

/**
 * Generated class for the ScanQrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan-qrcode',
  templateUrl: 'scan-qrcode.html',
})
export class ScanQrcodePage {
  scannedCode=null;
  base64Image:any;


  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private photoLibrary:PhotoLibrary,
    private barcodeScanner:BarcodeScanner,
  public camera:Camera) {
    this.scanCode();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanQrcodePage');
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

scanCode(){
  this.barcodeScanner.scan().then(barcodeData=>{
    this.scannedCode=barcodeData.text;
  })
}

}
