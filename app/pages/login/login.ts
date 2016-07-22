import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {DetailPage} from '../detail/detail';

@Component({
  templateUrl: 'build/pages/login/login.html',

})
export class LoginPage {

  logintag = "";
  constructor(private _navController: NavController) {

  }
  func = setTimeout(function(){},1)
  test(value){
    clearTimeout(this.func);
    this.func = setTimeout( () => {
      this.logintag = value
    },500);

  }

  pushPage(username,password) {

    this._navController.push(DetailPage, {
      username: username,
      password: password});

  }
}
