import { CheckoutPage } from './../checkout/checkout';
import { HomePage } from './../home/home';
import { SignUpPage } from './../sign-up/sign-up';
import { DashboardPage } from './../dashboard/dashboard';
import { TabsPage } from './../tabs/tabs';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PharmacyTabsPage } from '../pharmacy-tabs/pharmacy-tabs';
import { AdminTabsPage } from '../admin-tabs/admin-tabs';
import { ResetPasswordPage } from '../reset-password/reset-password';



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

  constructor(private auth: AuthServiceProvider, 
    private navCtrl:NavController, 
    private toaster:ToastController) {

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
      client_secret: 'RzMJcxfZL0SpUVLjcA1EDiuTCxa7LuRCYlnGrJDf',
      grant_type:'password',
      scope:'*'
    
   
  }

  buildCredentials(){
    this.loginData.username = this.loginForm.controls['email'].value;
    this.loginData.password = this.loginForm.controls['password'].value;

  }

  signin(){
      this.signing = true;
      this.buildCredentials();
      console.log(this.loginData);
      this.auth.authenticate('oauth/token',this.loginData).subscribe((data)=>{
        localStorage.setItem('jwt',data['access_token']);
        localStorage.setItem('jwt_expiry',data['expires_in']);
        localStorage.setItem('jwt_refresh',data['refresh_token']);
        setTimeout(() => {
          this.setUserID();
          this.setUserAccessLevel();
          this.signing = false;
          this.navCtrl.setRoot(AdminTabsPage);
        }, 3000);
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
          this.signing = false;           
        }
        if (error.status === 401) {
          console.log('Invalid Credentials');
          let message = this.toaster.create({
            message: 'Invalid username / password combination',
            duration: 8000,
            dismissOnPageChange: true,
            position: 'top'
          });
          message.present();
          this.signing = false;          
        }
      });
  }

  //setting user id and access levels 
  setUserID() {
    this.auth.getAll('user', localStorage.getItem('jwt')).subscribe((response) => {
      localStorage.setItem('logUserId', response['user']['access_level']);  
      console.log("User access level :" + response);
    },(error) => { 
      console.log(error);
    });
  }

  //put logged in user access_level in localstorage
  setUserAccessLevel() {
    this.auth.getSingle('user',localStorage.getItem('logUserId'),localStorage.getItem('jwt')).subscribe((response) => {
      console.log(response['user']['access_level']);
      // alert(response['user']['access_level']);
      localStorage.setItem('logUserAccessLevel', response['user']['access_level']);
      console.log(localStorage.getItem('logUserAccessLevel'));
    },(error) => {
      console.log(error);
    });
  }

  goToResetPassword(){
    this.navCtrl.push(ResetPasswordPage);
  }
 
}
