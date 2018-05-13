import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

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

  drugs: any;
  data: any;
  loading: boolean = false;
  loader: any;
  catmembers: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider, private toaster: ToastController, public loadingCtrl : LoadingController) {
    this.getDrugCategoryMembers(this.drugs);
  }
  

  // getting all drug categort members
  getDrugCategoryMembers(id){
    this.loader =this.loadingCtrl.create({
      content:"Getting Category Members"
    });
    this.loader.present();
    this.loading = true;
    this.auth.getSingle('drugs_cat_members',id,localStorage.getItem('jwt')).subscribe((response)=>{
      this.drugs = response['data'];
      this.loading=false;
      this.loader.dismissAll();
      }),(error)=>{
        let message = this.toaster.create({
          message: 'No drug is saved under this category yet',
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
    this.showViewSpinner =true;
    this.loader =this.loadingCtrl.create({
      content:"Deleting Medicine"
    });
    this.loader.present();
    this.auth.destroySingle('drug_cat_members',id,localStorage.getItem('jwt')).subscribe((response=>{
        this.data = response['data'];
        this.showViewSpinner=false;
        this.loader.dismissAll();
    }),(error=>{
      let message = this.toaster.create({
        message: 'Could not delete this drug',
        duration: 5000,
        dismissOnPageChange: true,
        position: 'top'
      });
      message.present();
      console.log(error);
      this.loader.dismissAll();
    }));
  }
  

}
