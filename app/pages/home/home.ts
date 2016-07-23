import {Component} from "@angular/core";
import {NavController, NavParams, MenuController} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  username: string;
  password: string;

  constructor(private _navController: NavController, private _navParams: NavParams,private menu: MenuController) {
    alert(_navParams);
    this.username = _navParams.get('username');
    this.password = _navParams.get('password');
  }

  openLeftMenu(){
    this.menu.open();
  }
}
