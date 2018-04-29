import { PharmacyPage } from './../pharmacy/pharmacy';
import { SignUpPage } from './../sign-up/sign-up';
import { DashboardPage } from './../dashboard/dashboard';
import { TabsPage } from './../tabs/tabs';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { StockPage } from '../stock/stock';


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
export class SignInPage implements OnInit {

  response: any;
  acc_lvl: boolean = false;
  signing: boolean = false;

  constructor(private auth: AuthServiceProvider, private navCtrl:NavController, private toaster:ToastController) {

  }

  ngOnInit(){
  }


  // creating a sign in form
  public loginForm = new FormGroup({
    email: new FormControl(null,Validators.compose([Validators.required])),
    password: new FormControl(null,Validators.compose([Validators.required,Validators.min(5)])),

  });

  // sign-up page
  signUp(){
    console.log('yolo');
    this.navCtrl.push(SignUpPage);
  }


 
  loginData={
   
      username: '',
      password: '',
      client_id: '2',
      client_secret: '5JFugStktuEGFtIeYUxib4PZHTcd2UrxVESMLeEH',
      grant_type:'password',
      scope:'*'
    
   
  }

  buildCredentials(){
    this.loginData.username = this.loginForm.controls['email'].value;
    this.loginData.password = this.loginForm.controls['password'].value;

  }

  signin(){
      this.buildCredentials();
      console.log(this.loginData);
      this.auth.authenticate('oauth/token',this.loginData).subscribe((data)=>{
        localStorage.setItem('jwt',data['access_token']);
        localStorage.setItem('jwt_expiry',data['expires_in']);
        localStorage.setItem('jwt_refresh',data['refresh_token']);
        this.navCtrl.setRoot(DashboardPage);
      },error=>{
        console.log(error.status);
        if(error.status===400){
          console.log('Unauthorized');
          let message=this.toaster.create({
            message: 'Please fill the form',
            duration:8000,
            dismissOnPageChange:true,
            position:'top'
          });
          message.present();  
        }
        if (error.status === 401) {
          console.log('yolo');
          let message = this.toaster.create({
            message: 'Invalid username / password combination',
            duration: 8000,
            dismissOnPageChange: true,
            position: 'top'
          });
          message.present();
        }
      });
  }

  stock(){
    this.navCtrl.push(PharmacyPage);
  }



}
