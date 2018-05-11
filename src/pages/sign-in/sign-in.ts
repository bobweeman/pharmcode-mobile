import { CheckoutPage } from './../checkout/checkout';
import { HomePage } from './../home/home';
import { SignUpPage } from './../sign-up/sign-up';
import { DashboardPage } from './../dashboard/dashboard';
import { TabsPage } from './../tabs/tabs';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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
  data={
      email:''
  }
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
          this.signing = false;
          this.setUserAccessLevel();
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


  setUserAccessLevel(){
    this.data.email=this.loginData.username;
    this.auth.postStore('access_level',this.data , localStorage.getItem('jwt')).subscribe((response) => {
      localStorage.setItem('logUserAccessLevel',response['data']['access_level']);
      localStorage.setItem('logUserID',response['data']['id']);
      if(response['data']['access_level'] === '0'){
        this.navCtrl.setRoot("DashboardPage");
      }else 
      if(response['data']['access_level'] === '1'){
        this.navCtrl.setRoot("PharmacyTabsPage");
      }
      else{
        this.navCtrl.setRoot("AdminTabsPage");
      }
    },(error) => {
      console.log(error);
    });
  }

  goToResetPassword(){
    this.navCtrl.push(ResetPasswordPage);
  }
 
}
