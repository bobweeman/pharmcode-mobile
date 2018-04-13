import { TabsPage } from './../tabs/tabs';
import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
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
export class SignInPage implements OnInit {

  response: any;
  acc_lvl: boolean = false;
  signing: boolean = false;

  constructor(private auth: AuthServiceProvider) {
  }

  ngOnInit(){
    this.popo();
  }

  // sign-up page
  signUp(){
  }


 
  login={
   
      username: 'a@b.com',
      password: 'password',
      client_id: '2',
      client_secret: 'wGxuM3gCh8WUO7QwK0RvPsnFEnNEeDPuskbJeS7V',
      grant_type:'password',
      scope:''
    
   
  }

  popo(){
      this.auth.authenticate('oauth/token',this.login).subscribe((data)=>{
          console.log(data);
      },error=>{
        console.log(error);
      });
  }

}
