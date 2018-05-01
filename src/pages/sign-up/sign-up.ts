import { SignInPage } from './../sign-in/sign-in';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { AuthProvider } from './../../providers/auth/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

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
  
  constructor(private http:AuthServiceProvider, private navCtrl:NavController,private toaster:ToastController){

   }


  signupForm = new FormGroup({
    email: new FormControl(null, Validators.compose([Validators.required,Validators.email])),
    name: new FormControl(null, Validators.compose([Validators.required,Validators.min(8)])),
    password: new FormControl(null, Validators.compose([Validators.required,Validators.min(5)])),
    confirm_password: new FormControl(null, Validators.compose([Validators.required,Validators.min(5)]))
  });

  registerData={
    email:'',
    name:'',
    password:'',
  }

  buildData(){
    this.registerData.email =this.signupForm.controls['email'].value,
      this.registerData.name= this.signupForm.controls['name'].value,
     this.registerData.password= this.signupForm.controls['password'].value
  }

  registerUser(){
    this.buildData();
    this.http.doRegistration('user_registration',this.registerData).subscribe((data)=>{
      let message = this.toaster.create({
        message: 'Registration Successful',
        duration: 8000,
        dismissOnPageChange: false,
        position: 'top'
      });
      message.present();  
      this.navCtrl.popTo(SignInPage);
        console.log(data);
      },error=>{
        console.log(error);
      })
  }


  confirmKeys(){
      if(this.signupForm.controls['password'].value != this.signupForm.controls['confirm_password'].value){
        return false;
      }
      return true;
  }


}
