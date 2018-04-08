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
  
  submitAttempt:boolean = false;
  signupForm: FormGroup;
  showUsernameError: boolean;
  loader: Loading;
  response: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider, private fb: FormBuilder, private toastCtrl: ToastController, private loaderCtrl: LoadingController, private alertCtrl: AlertController) {

    // removing authenticated user
    localStorage.removeItem('authUser');
    // removing all tokens
    localStorage.removeItem('token');
    // getting and setting sign-up details
    this.signupForm = fb.group({
      surname:[null,Validators.compose([Validators.required,Validators.maxLength(30)])],
      othernames:[null,Validators.compose([Validators.required,Validators.maxLength(30)])],
      email:[null,Validators.compose([Validators.required,Validators.email])],
      password:[null,Validators.compose([Validators.required,Validators.minLength(5)])],
      confirm_password:[null,Validators.required],
    }, {
      // validation method
      validator: PasswordValidation.MatchPassword
    })
  }

  // user registration variable declaration
  regUser={
    "surname":"",
    "othernames":"",
    "email":"",
    "password":"",
    "confirm_password":"",
  }

  // preparing user information for registration
  prepareData(){
    this.regUser.surname = this.signupForm.controls.surname.value;
    this.regUser.othernames = this.signupForm.controls.othernames.value;
    this.regUser.email = this.signupForm.controls.email.value;
    this.regUser.password = this.signupForm.controls.password.value;
  }

  //user registration
  registerUser(){
    this.loader = this.loaderCtrl.create({
      content: "Building Your Profile ..."
    });

    this.loader.present();
    this.submitAttempt = true;
    this.prepareData();

    this.auth.postStore("user", this.regUser, localStorage.getItem('token')).then((result) => {
      this.response = result;
      this.loader.dismissAll();
      let alert = this.alertCtrl.create({
        title: 'Welcome to Pharmcode',
        subTitle: 'Please login to continue',
        buttons: ['Ok']
      });
        alert.present();
        this.navCtrl.setRoot("SignInPage");
      }).catch((error) => {
        console.log(error);
        let alert = this.alertCtrl.create({
          title: 'Registration Failed',
          subTitle: 'Please try again later',
          buttons: ['Ok']
        });
          alert.present();
          this.loader.dismissAll();
    });
  }
}
