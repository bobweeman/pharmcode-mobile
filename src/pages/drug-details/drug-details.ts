import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DrugDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drug-details',
  templateUrl: 'drug-details.html',
})
export class DrugDetailsPage {

  showCards:boolean=false;
  showSpinner:boolean=false;
  showViewSpinner:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

}
