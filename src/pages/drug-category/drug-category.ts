import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AddDrugPage } from '../add-drug/add-drug';

/**
 * Generated class for the DrugCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drug-category',
  templateUrl: 'drug-category.html',
})
export class DrugCategoryPage {

  category:any;
  loading: boolean = false;
  showSpinner: boolean = false;
  showViewSpinner: boolean = false;
  data: any;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthServiceProvider, private modalCtrl: ModalController, private toaster : ToastController, public viewCtrl:ViewController) {

    // calling category function
    this.getCategories();

  }

  // admin can add a category
  addCategory(){
    let modal=this.modalCtrl.create(AddDrugPage);
    modal.present();
  }

  
  // getting all drug categories in the database
  getCategories(){
    this.loading = true;
    this.auth.getAll('drugs_cat',localStorage.getItem('jwt')).subscribe((response)=>{
      this.category = response['data'];
      this.loading=false;
      }),(error)=>{
        let message = this.toaster.create({
          message: 'No categories data found',
          duration: 3000,
          dismissOnPageChange: true,
          position: 'top'
        });
        message.present();
        this.loading=false;
        console.log(error);
    };
  }

  viewAll(id){
    this.showViewSpinner =true;
    this.auth.getSingle('drug_cat_members',id,localStorage.getItem('jwt')).subscribe((response=>{
        this.data = response['data'];
        let modal=this.modalCtrl.create("DrugDetailsPage",this.data);
        this.showViewSpinner=false;
        modal.present();
    }),(error=>{
      console.log(error);
    }));
  }
}
