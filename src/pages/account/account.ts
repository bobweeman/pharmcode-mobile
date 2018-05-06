import { Camera } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  account: string = "profile";
  base64Image: any = "http://www.gravatar.com/avatar?d=mm&s=140";




  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public camera:Camera
   
  ) { }

  ngAfterViewInit(){

  }

  updatePicture(){
    let options = {
      quality:100,   // Specify quality in number 0-100
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,   // camera or gallery
      allowEdit: true,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      saveToPhotoAlbum: true,
      correctOrientation:true,
      cameraDirection: 0// BACK 0, FRONT 1
  };

  this.camera.getPicture(options).then((imageData) => {
    console.log(imageData);
    this.base64Image = 'data:image/jpeg;base64,' + imageData;

  }, (err) => {
   // Handle error
  });
  console.log('Clicked to update picture');
}

changePassword() {
  console.log('Clicked to change password');
}
}

