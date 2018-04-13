import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AppError } from '../common/app-error';
import { Unauthorised } from '../common/unauthorised';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


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

  response: any;
  acc_lvl: boolean = false;
  signing: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private auth: AuthServiceProvider, private toastCtrl: ToastController, private fb: FormBuilder, private storage: Storage) {
  }

  // sign-up page
  signUp(){
    this.navCtrl.push("SignUpPage");
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

  signin() {
    this.signing=true;
    this.authenticate();
    this.auth.postStore("authenticate", this.credentials, localStorage.getItem('token')).subscribe((result) => {
      this.response = result['token'];
      if (this.response != null || this.response != undefined) {
        localStorage.setItem('token', this.response)
        localStorage.setItem('firstTimer','0');
        
        setTimeout(() => {
          this.setUserID();
          this.setUserAccessLevel()
          this.signing = false;
          this.navCtrl.setRoot("TabsPage");
        }, 3000)

      } else {
        this.presentToast('Invalid username or password combination');
        this.signing = false;
        // this.loading.dismissAll();
      }

    },(error) => {
      if (error.status == 401) {
        this.presentToast('Invalid username or password combination');
        this.signing = false;

      } else if (error.status === 0) {
        this.presentToast('Please check your internet connection');
        this.signing = false;
      } else {
        this.presentToast("Service not available. Please try again later");
        this.signing = false;
      }
    });
  }

  setUserID() {//put logged in user id in localstorage
    this.auth.getAll('authenticate', localStorage.getItem('token')).subscribe((response) => {
      localStorage.setItem('logUserId', response['user']['id']);  
    },(error)=>{
      console.log(error);
    });
  }

  setUserAccessLevel() {//put logged in user access_level in localstorage
    this.auth.getSingle('access_level',localStorage.getItem('logUserId'),localStorage.getItem('token')).subscribe((response) => {
      localStorage.setItem('logUserAccessLevel', response['data']['uac_id']);
    },(error)=>{
      console.log(error);
    });
  }


  checkUserPriviledge() {
    let a = JSON.parse(localStorage.getItem('logUserAccessLevel'));
    switch (a) {

      case 1:
        // User is a Doctor 
        this.acc_lvl = true;
        // keep track of who has the ability to access doctor section
        localStorage.setItem('canAccessDoctor',JSON.stringify(this.acc_lvl));
        break;

      case 2:
        // User is a Pharmacist
        this.acc_lvl = true;
        // keep track of who has the ability to access pharmacist section
        localStorage.setItem('canAccessPharmacist', JSON.stringify(this.acc_lvl));
        break;

      case 3:
        // User is Admin 
        this.acc_lvl = true;
        // keep track of who has is the Admin and can access administrative tools
        localStorage.setItem('canAccessAdmin', JSON.stringify(this.acc_lvl));
        break;

      case 4:
        // User is a Normal User
        this.acc_lvl = false;
        break;

      default:
        this.acc_lvl = false;
        break;
    }

  }

  higherAccess(){
    this.navCtrl.push("HigherAccessPage");
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'top'
    });
    toast.present();
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
