import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Loading, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Geolocation } from '@ionic-native/geolocation';
import { PharmacyMapPage } from '../pharmacy-map/pharmacy-map';


/**
 * Generated class for the PharmacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pharmacy',
  templateUrl: 'pharmacy.html',
})
export class PharmacyPage {

  public pharmacyData={
    pharm_name:"",
    phone:"",
    email:"",
    address:"",
    website_url:"",
    longitude:0,
    latitude:0,
  }

  loader:Loading;
  isLoading:boolean=false;
  pharmacyForm:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private modalCtrl:ModalController , private auth:AuthServiceProvider, private loadingCtrl:LoadingController,
    private formBuilder:FormBuilder, private geo:Geolocation) {

      this.pharmacyForm = formBuilder.group({
        name:[null,Validators.compose([Validators.required,Validators.minLength(5)])],
        phone:[null,Validators.compose([Validators.required,Validators.minLength(10)])],
        email:[null,Validators.compose([Validators.required,Validators.email])],
        address:[null,Validators.compose([Validators.required,Validators.minLength(5)])],
        website:[null,Validators.compose([Validators.required,Validators.minLength(5)])]
    });
  }

  mapPharmacy(){
    this.isLoading=true;
    this.geo.getCurrentPosition({ enableHighAccuracy: true }).then((location)=>{
      setTimeout(()=>{
        this.pharmacyData.latitude =location.coords.latitude;
        this.pharmacyData.longitude =location.coords.longitude;
        this.isLoading = false;       
        this.addPharmacyMap();
      },2000);
    })
  }

  addPharmacyMap(){
    this.navCtrl.push("PharmacyMapPage", this.pharmacyData);
  }

}
