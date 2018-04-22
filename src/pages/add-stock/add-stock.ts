import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ViewController, ToastController  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';



/**
 * Generated class for the AddStockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-stock',
  templateUrl: 'add-stock.html',
})
export class AddStockPage {

  stockForm:FormGroup;
  photos;
  hasPhotos:boolean=false;
  data={
    name:'',
    quantity:'',
    description:'',
    price:'',
    photos:[],
    user_id:'',
    currency:''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider, public actionSheetCtrl: ActionSheetController, private viewCtrl:ViewController, private toaster: ToastController, private fb:FormBuilder, private camera: Camera) {

    this.stockForm = this.fb.group({
      name:[null,Validators.compose([Validators.required,Validators.minLength(2)])],
      quantity:[null,Validators.compose([Validators.required])],
      description:[null, Validators.compose([Validators.required,Validators.minLength(2)])],
      price:[null, Validators.compose([Validators.required])],
      currency:[null, Validators.compose([Validators.required])]
    });

  }

  
  addToStock(){
    this.data.name = this.stockForm.controls.name.value;
    this.data.description = this.stockForm.controls.description.value;
    this.data.price = this.stockForm.controls.price.value;
    this.data.quantity = this.stockForm.controls.quantity.value;
    this.data.currency = this.stockForm.controls.currency.value;
    // this.data.photos = this.photos;
    this.data.user_id = localStorage.getItem('logUserId');

    this.auth.postStore('addStock',this.data,localStorage.getItem('jwt')).subscribe((response=>{
      let message=this.toaster.create({
        message: 'New item added to stock',
        duration:8000,
        dismissOnPageChange:true,
        position:'top'
      });
      message.present(); 
      this.navCtrl.pop();
      
    }),(error=>{
      alert(JSON.stringify(error));
    }))
}

}
