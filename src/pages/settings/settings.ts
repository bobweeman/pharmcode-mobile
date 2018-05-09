import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController, LoadingController, Loading } from 'ionic-angular';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { PharmacyMapPage } from '../pharmacy-map/pharmacy-map';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  pharmUpdateForm:FormGroup;
  // pharmData:boolean=false;
  user:any={}
  pharmDetails:any={};
  loading: Loading;
  loader:Loading;
  isLoading:boolean=false;
  pharmHasData:boolean=false;

  public pharmData={
    pharm_name:"",
    phone:"",
    email:"",
    address:"",
    website_url:"",
    longitude:0,
    latitude:0,
  }
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public toaster: ToastController, public platform: Platform, public loadingCtrl: LoadingController, private formbuilder:FormBuilder, private geo:Geolocation
     , private auth:AuthServiceProvider ) {
  
    // initialize the form
        this.pharmUpdateForm = formbuilder.group({
          name:[null,Validators.compose([Validators.required,Validators.minLength(5)])],
          phone:[null,Validators.compose([Validators.required,Validators.minLength(10)])],
          email:[null,Validators.compose([Validators.required,Validators.email])],
          address:[null,Validators.compose([Validators.required,Validators.minLength(5)])],
          website:[null,Validators.compose([Validators.required,Validators.minLength(5)])] 
    });
  }

  // getting pharmacy details
  updatePharmacy(){
    setTimeout(()=>{
       this.auth.getSingle("pharmacy",localStorage.getItem('logUserId'),localStorage.getItem('token')).subscribe((result)=>{
      if(result['data'].length ==0){
        let message=this.toaster.create({
          message: 'No pharmacy data found',
          duration:8000,
          dismissOnPageChange:true,
          position:'top'
        });
        message.present();
      }else{
        console.log(result);
        this.pharmData = result['data'][0]; 
        this.prePopulate();
        this.pharmHasData=true;
        console.log(result)
       }
      },(error)=>{
        console.log(error);
      });
    },1000) 
  }

  //load form with values if pharmacy data already exists
  prePopulate(){ 
    this.pharmUpdateForm.get('name').setValue(this.pharmDetails.name);
    this.pharmUpdateForm.get('phone').setValue(this.pharmDetails.phone);
    this.pharmUpdateForm.get('email').setValue(this.pharmDetails.email);
    this.pharmUpdateForm.get('address').setValue(this.pharmDetails.address);
    this.pharmUpdateForm.get('website').setValue(this.pharmDetails.website);
  }

  updatePharmacyMap(){
    this.navCtrl.push("PharmacyMapUpdatePage", this.pharmUpdateForm);
  }
  
  mapPharmacy(){
    this.isLoading=true;
    this.geo.getCurrentPosition({ enableHighAccuracy: true }).then((location)=>{
      setTimeout(()=>{
        this.pharmData.latitude =location.coords.latitude;
        this.pharmData.longitude =location.coords.longitude;
        this.isLoading = false;       
        this.updatePharmacyMap();
      },2000);
    })
  }

  

}
