import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {DetailPage} from '../detail/detail';

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  constructor(private _navController: NavController) {

  }

  pushPage(buttonColor: string) {
    this._navController.push(DetailPage, { color: buttonColor });

  }
}
