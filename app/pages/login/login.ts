import {Component} from "@angular/core";
import {NavController, MenuController} from 'ionic-angular';
import {HomePage} from '../home/home';


@Component({
  templateUrl: 'build/pages/login/login.html',

})
export class LoginPage {

  logintag: string = "";
  message: string = "";
  constructor(private _navController: NavController, private menuController: MenuController) {
    this.menuController.enable(false, 'left');
  }

  func = setTimeout(function(){},1)
  test(value){
    clearTimeout(this.func);
    this.func = setTimeout( () => {
      this.logintag = value
    },500);

  }

  loginWith(username,password){
    if(username=="" && password == ""){
      return true;
    } else {
      return false;
    }
  }

  pushPage(username,password) {
    var loginSuccess = this.loginWith(username,password);

    if(loginSuccess){
      this._navController.push(HomePage, {
        username: username,
        password: password
      });
    } else {
      this.message="There's a problem when login";
    }
  }
}
