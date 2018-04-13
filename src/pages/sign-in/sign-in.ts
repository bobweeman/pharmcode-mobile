import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private aka:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  login={
    form_params:{
      email: 'a@b.com',
      password: 'password',
      client_id: 1,
      client_secret: '8YdtlqE4c4Mfk9Vosduz5jUck3hWhhSXplV0oCDL',
      grant_type:'password',
      scope:''
    }
   
  }

  popo(){
      this.aka.authenticate('oauth/token',this.login).subscribe((data)=>{
          console.log(data);
      });
  }

}
