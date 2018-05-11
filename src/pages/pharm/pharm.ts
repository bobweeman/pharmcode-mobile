import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the PharmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pharm',
  templateUrl: 'pharm.html',
})
export class PharmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthServiceProvider) {
  }

  // getting number of pharmacy count
  getPharmacyCount(){
    setTimeout(()=>{
    this.auth.getSingle('pharmacy_count',localStorage.getItem('logUserID'),localStorage.getItem('token'))
    .subscribe((response=>{
      localStorage.setItem('pharmacyCount',response['pharmacyCount']);
    }),(error=>{
      console.log(error);
    }));
    },5000)
  }

  // getting number of user count
  getUserCount(){
    setTimeout(()=>{
    this.auth.getSingle('user_count',localStorage.getItem('logUserID'),localStorage.getItem('token'))
    .subscribe((response=>{
      localStorage.setItem('userCount',response['userCount']);
    }),(error=>{
      console.log(error);
    }));
    },5000)
  }

  // getting number of categories count
  getCategoryCount(){
    setTimeout(()=>{
    this.auth.getSingle('category_count',localStorage.getItem('logUserID'),localStorage.getItem('token'))
    .subscribe((response=>{
      localStorage.setItem('categoryCount',response['categoryCount']);
    }),(error=>{
      console.log(error);
    }));
    },5000)
  }

  // getting pharmacy list

}
