import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Loading, LoadingController, ViewController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';

/**
 * Generated class for the AddDrugPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-drug',
  templateUrl: 'add-drug.html',
})
export class AddDrugPage {

  loader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthServiceProvider, private loadingCtrl:LoadingController, private formBuilder:FormBuilder, public viewCtrl:ViewController, private toaster: ToastController) {
  }

  addCategoryForm = new FormGroup({
    name: new FormControl(null, Validators.compose([Validators.required,Validators.min(2)]))
  });

  categoryData={
    name:'',
  }

  buildData(){
      this.categoryData.name= this.addCategoryForm.controls['name'].value
  }

  addCategory(){
    this.buildData();
    this.loader =this.loadingCtrl.create({
      content:"Seting Up Environment..."
    });
    this.loader.present();
    this.auth.postStore('drug_category', localStorage.getItem('logUserID'),localStorage.getItem('jwt')).subscribe((response) =>{
      let message = this.toaster.create({
        message: 'Category Creation Successful',
        duration: 5000,
        dismissOnPageChange: false,
        position: 'top'
      });
      console.log(response);
      message.present(); 
      this.loader.dismissAll();
      this.cancel();
    },(error) => {
      let message=this.toaster.create({
        message: 'Could not save new category',
        duration:5000,
        dismissOnPageChange:true,
        position:'top'
      });
      message.present();
      console.log(error);
      this.loader.dismissAll();
    })
  }

  cancel(){
    this.viewCtrl.dismiss()
  } 

}
