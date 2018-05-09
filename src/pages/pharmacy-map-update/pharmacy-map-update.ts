import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Loading, LoadingController, ToastController } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';

/**
 * Generated class for the PharmacyMapUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pharmacy-map-update',
  templateUrl: 'pharmacy-map-update.html',
})
export class PharmacyMapUpdatePage {

  lng:number;
  lat:number;
  loader:Loading;
  map: GoogleMap;

  data = {
    user_id: '0',
    pharm_name: "",
    phone:"",
    email:"",
    address:"",
    website_url:"",
    longitude:0,
    latitude:0,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, 
    private auth:AuthServiceProvider, private storage:Storage,
    private loadingCtrl:LoadingController, private nativeGeocoder: NativeGeocoder, 
    private googleMaps: GoogleMaps, private toaster: ToastController) {

      this.lat = this.navParams.data.latitude;
      this.lng = this.navParams.data.longitude;
      this.loadMap();

  }

  cancel(){
    this.viewCtrl.dismiss()
  } 

  prepareData(){
    this.data.user_id = localStorage.getItem('logUserId');    
    this.data.pharm_name = this.navParams.data.pharm_name;
    this.data.phone = this.navParams.data.phone;
    this.data.email = this.navParams.data.email;
    this.data.address = this.navParams.data.address;
    this.data.website_url = this.navParams.data.website_url;
    this.data.latitude = this.navParams.data.latitude;
    this.data.longitude = this.navParams.data.longitude;
}
  saveWorkLocation(){
    this.loader = this.loadingCtrl.create({
      content:"Saving this as Pharmacy Location"
    });
    this.loader.present();
    this.prepareData();
    setTimeout(()=>{
      this.auth.postUpdate("pharmacy",this.data,localStorage.getItem('token')).subscribe((response)=>{
        let message=this.toaster.create({
          message: 'Created Your Pharmacy Successfully',
          duration:8000,
          dismissOnPageChange:true,
          position:'top'
        });
        message.present(); 
        this.loader.dismissAll();
        this.cancel();
      },(error)=>{
        let message=this.toaster.create({
          message: 'Error registering your pharmacy. Try again later',
          duration:8000,
          dismissOnPageChange:true,
          position:'top'
        });
        message.present(); 
        console.log(error)
        this.loader.dismissAll();
      });
    },2000);
  }

  // load google maps with current location
  loadMap() {
    setTimeout(() => {
      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: this.lat,
            lng: this.lng
          },
          zoom: 18,
          tilt: 30
        }
      };

      this.map = this.googleMaps.create('pharmacyLocation', mapOptions);

      // Wait the MAP_READY before using any methods.
      this.map.one(GoogleMapsEvent.MAP_READY)
        .then(() => {
          let message=this.toaster.create({
            message: 'There you are!',
            duration:8000,
            dismissOnPageChange:true,
            position:'top'
          });
          message.present(); 

          // Now you can use all methods safely.
          this.map.addMarker({
            title: 'You',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: this.lat,
              lng: this.lng
            }
          })
        });
    }, 2000)
  }

}
