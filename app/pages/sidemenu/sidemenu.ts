import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/detail/detail.html'
})
export class DetailPage {
  username: string;
  password: string;

  constructor(private _navController: NavController, private _navParams: NavParams) {
    alert(_navParams);
    this.username = _navParams.get('username');
    this.password = _navParams.get('password');
  }
}
