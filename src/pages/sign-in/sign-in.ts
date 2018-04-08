import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AppError } from '../common/app-error';
import { Unauthorised } from '../common/unauthorised';


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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //required credentials for receiving JWT from api-endpoint

  credentials = {
    email: '',
    password: '',
    grant_type: 'password',
    client_secret: 'yEwte07tHoMKTO9Kimb7j2rf3g0EKK0mV0DI7rnx',
    client_id: '2'
  }

  //create a new relative form of the login
  signinForm=new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password:new FormControl(null, [Validators.minLength(8), Validators.required]),
  });


  authenticate(){
    this.credentials.email=this.signinForm.controls['email'].value;
    this.credentials.password=this.signinForm.controls['password'].value;
   
  }
}
