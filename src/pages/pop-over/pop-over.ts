import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, App, ToastController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { SignInPage } from '../sign-in/sign-in';

/**
 * Generated class for the PopOverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({ 
  selector: 'page-pop-over',
  templateUrl: 'pop-over.html',
})
export class PopOverPage {
  classes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl:ViewController, public app: App, private toaster: ToastController) 
  {
    this.classes  = {
      'SignInPage':SignInPage
    }
  }

  signOut(){
    let message = this.toaster.create({
      message: 'You have been logged out',
      duration: 5000,
      dismissOnPageChange: false,
      position: 'top'
    });
    message.present();
    // remove token
    localStorage.removeItem('jwt');
    // remove access level
    localStorage.removeItem('logUserAccessLevel');
    // getout to login page
    this.app.getRootNav().setRoot("SignInPage");
  }

  // close(url: string) {
  //   window.open(url, '_blank');
  //   this.viewCtrl.dismiss();
  // }


//  goToPage(page:any) {
  
//     this.viewCtrl.dismiss();
//     this.app.getRootNav().push(this.classes[page]);
  
//   }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopOverPage');
  }

}
