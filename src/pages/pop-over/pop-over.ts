import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, App } from 'ionic-angular';
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
  template: `
  <ion-list>
    <button ion-item (click)="goToPage('SignInPage')">Logout</button>

    </ion-list>
`
})
export class PopOverPage {
  classes: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl:ViewController,
    public app: App,
  ) {
    this.classes  = {
      'SignInPage':SignInPage
      
    }

  }

  close(url: string) {
    window.open(url, '_blank');
    this.viewCtrl.dismiss();
  }


 goToPage(page:any) {
  
    this.viewCtrl.dismiss();
    this.app.getRootNav().push(this.classes[page]);
  
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopOverPage');
  }

}
