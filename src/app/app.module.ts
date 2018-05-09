import { AccountPage } from './../pages/account/account';
import { ProductFilterPage } from './../pages/product-filter/product-filter';
import { PopOverPage } from './../pages/pop-over/pop-over';
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
import { PhotoLibrary} from '@ionic-native/photo-library';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import { BarcodeScanner} from '@ionic-native/barcode-scanner';
import { ListPage } from '../pages/list/list';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { ScanQrcodePage } from '../pages/scan-qrcode/scan-qrcode';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { PharmacyTabsPage } from '../pages/pharmacy-tabs/pharmacy-tabs';
import { StatisticsPage } from '../pages/statistics/statistics';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { UsersPage } from '../pages/users/users';
import { PharmPage } from '../pages/pharm/pharm';
import { PharmDetailsPage } from '../pages/pharm-details/pharm-details';
import { DrugCategoryPage } from '../pages/drug-category/drug-category';
import { PharmacyMapUpdatePage } from '../pages/pharmacy-map-update/pharmacy-map-update';



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
    SearchPage,
    PopOverPage,
    ProductFilterPage,
    AccountPage,
    ScanQrcodePage,
    WishlistPage,
    ListPage,
    ResetPasswordPage,
    PharmacyTabsPage,
    StatisticsPage,
    UserDetailsPage,
    UsersPage,
    PharmPage,
    PharmDetailsPage,
    DrugCategoryPage,
    PharmacyMapUpdatePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJqs9qxDAaSBRcl1i9Ot8hJNbRSyIyPWk'
    }),
    BrowserAnimationsModule,
    NgxQRCodeModule
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
    SearchPage,
    PopOverPage,
    ProductFilterPage,
    AccountPage,
    ScanQrcodePage,
    WishlistPage,
    ListPage,
    ResetPasswordPage,
    PharmacyTabsPage,
    StatisticsPage,
    UserDetailsPage,
    UsersPage,
    PharmPage,
    PharmDetailsPage,
    DrugCategoryPage,
    PharmacyMapUpdatePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    NativeGeocoder,
    GoogleMaps,
    PhotoLibrary,
    BarcodeScanner,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    CartProvider,
    
  ]
})
export class AppModule {}
 