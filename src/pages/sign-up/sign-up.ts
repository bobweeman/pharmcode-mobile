import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Loading, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { PasswordValidation } from './../../app/validators/passwordChecker';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
