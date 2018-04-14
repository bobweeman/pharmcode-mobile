import { TabsPage } from './../tabs/tabs';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


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

  constructor(private auth: AuthServiceProvider,private navCtrl:NavController) {
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
  }


 
  loginData={
   
      username: '',
      password: '',
      client_id: '2',
      client_secret: 'wGxuM3gCh8WUO7QwK0RvPsnFEnNEeDPuskbJeS7V',
      grant_type:'password',
      scope:''
    
   
  }

  buildCredentials(){
    this.loginData.username = this.loginForm.controls['email'].value;
    this.loginData.password = this.loginForm.controls['password'].value;

  }

  signin(){
      this.buildCredentials();
      this.auth.authenticate('oauth/token',this.loginData).subscribe((data)=>{
          // this.navCtrl.setRoot
      },error=>{
        console.log(error);
      });
  }

}
