import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  private server = "http://localhost:8000/api/";
  private oauth = "http://localhost:8000/";
  
  constructor(public http: HttpClient, private loader:LoadingController, public toastCtrl:ToastController,) {

  }

  doRegistration(endpoint,data){
    return this.http.post(this.server + endpoint, data);
  }

  getAll(endpoint,jwt){
    // get request to laravel index method on resource
    let config = new HttpHeaders();
    config.append('Accept', 'application/json');
    config.append('Authorization', 'Bearer ' + jwt);
    return this.http.get(this.server+endpoint,{headers:config});
  }

  // use this to log into the application
  authenticate(endpoint, data) {
    // send a  post request on a single resource
    return this.http.post(this.oauth+endpoint, data);
  }

  // clear existing tokens
  // can also use this to logout
  clearDeadNiggaz(){
    localStorage.removeItem("token");
    localStorage.removeItem("client_id");
  }

  postStore(endpoint, data,jwt){
    // store a newly created resource
    // get request to laravel index method on resource
    let config = new HttpHeaders();
    config.append('Accept', 'application/json');
    config.append('Authorization', 'Bearer ' + jwt);
    return this.http.post(this.server + endpoint + "/", data, { headers: config });
  }

  postUpdate(endpoint,data,jwt){
    // update an existing record
    // get request to laravel index method on resource
    let config = new HttpHeaders();
    config.append('Accept', 'application/json');
    config.append('Authorization', 'Bearer ' + jwt);
    return this.http.patch(this.server + endpoint + "/", data, { headers: config });
  }

  getSingle(endpoint,id,jwt){
    // view  an existing record
    // get request to laravel index method on resource
    let config = new HttpHeaders();
    config.append('Accept', 'application/json');
    config.append('Authorization', 'Bearer ' + jwt);
    return this.http.get(this.server + endpoint + "/" + id,{ headers: config });
  }


  postSingle(endpoint, data) {
    // send a  post request on a single resource
    return this.http.post(this.server+endpoint + "/" , data);
  }

  destroySingle(endpoint,id,jwt){
    // delete an exisiting record
    // get request to laravel index method on resource
    let config = new HttpHeaders();
    config.append('Accept', 'application/json');
    config.append('Authorization', 'Bearer ' + jwt);
    return this.http.delete(this.server + endpoint + "/" + id, { headers: config });
  }

}
