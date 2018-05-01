import { SearchPage } from './../pages/search/search';
import { ProductPage } from './../pages/product/product';
import { ShowcartPage } from './../pages/showcart/showcart';
import { CategoryPage } from './../pages/category/category';
import { CheckoutPage } from './../pages/checkout/checkout';
import { MyCartPage } from './../pages/my-cart/my-cart';
import { ProductListPage } from './../pages/product-list/product-list';
import { ProductDetailPage } from './../pages/product-detail/product-detail';
import { TutorialPage } from './../pages/tutorial/tutorial';
import { PharmacyPage } from './../pages/pharmacy/pharmacy';
import { PharmacyMapPage } from './../pages/pharmacy-map/pharmacy-map';
import { OrdersPage } from './../pages/orders/orders';
import { StockPage } from './../pages/stock/stock';
import { AddStockPage } from './../pages/add-stock/add-stock';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { WelcomePage } from './../pages/welcome/welcome';
import { SignInPage } from './../pages/sign-in/sign-in';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpClientModule } from '@angular/common/http';
import { SettingsPage } from '../pages/settings/settings';
import { Camera } from '@ionic-native/camera';

// Map library
import { AgmCoreModule } from '@agm/core';
import { GoogleMaps } from '@ionic-native/google-maps';
// Geolocation features
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartProvider } from '../providers/cart/cart';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SignInPage,
    SignUpPage,
    WelcomePage,
    DashboardPage,
    StockPage,
    OrdersPage,
    SettingsPage,
    AddStockPage,
    PharmacyPage,
    PharmacyMapPage,
    TutorialPage,
    ProductDetailPage,
    ProductListPage,
    MyCartPage,
    CheckoutPage,
    CategoryPage,
    ShowcartPage,
    ProductPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJqs9qxDAaSBRcl1i9Ot8hJNbRSyIyPWk'
    }),
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SignInPage,
    SignUpPage,
    WelcomePage,
    DashboardPage,
    StockPage,
    OrdersPage,
    SettingsPage,
    AddStockPage,
    PharmacyPage,
    PharmacyMapPage,
    TutorialPage,
    ProductDetailPage,
    ProductListPage,
    MyCartPage,
    CheckoutPage,
    CategoryPage,
    ShowcartPage,
    ProductPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    NativeGeocoder,
    GoogleMaps,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    CartProvider,
    
  ]
})
export class AppModule {}
