import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users: any;
  data: any;
  loading: boolean = false;
  loader: any;
  deleting: boolean = false;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider, public loadingCtrl : LoadingController, public toaster: ToastController) {
    this.getUsers();
  }

  // getting all registered users
  getUsers(){
    this.loading = true;
    this.loader =this.loadingCtrl.create({
      content:"Getting all users, kindly wait"
    });
    this.auth.getAll('user',localStorage.getItem('jwt')).subscribe((response)=>{
      this.users = response['user'];
      this.loading=false;
      this.loader.dismissAll();
      }),(error)=>{
        let message = this.toaster.create({
          message: 'No registered users currently',
          duration: 5000,
          dismissOnPageChange: true,
          position: 'top'
        });
        message.present();
        this.loading=false;
        console.log(error);
        this.loader.dismissAll();
    };
  }

  delete(id){
    this.deleting = true;
    this.loader =this.loadingCtrl.create({
      content:"Deleting Unwanted User"
    });
    this.auth.destroySingle('user',id,localStorage.getItem('jwt')).subscribe((response=>{
        this.data = response['user'];
        let message = this.toaster.create({
          message: 'User deleted successfully',
          duration: 3000,
          dismissOnPageChange: true,
          position: 'top'
        });
        message.present();
        this.deleting = false;
        this.loader.dismissAll();
    }),(error=>{
      console.log(error);
      let message = this.toaster.create({
        message: 'Could not delete user',
        duration: 3000,
        dismissOnPageChange: true,
        position: 'top'
      });
      message.present();
      this.deleting = false;
      this.loader.dismissAll();
    }));
  }

}


