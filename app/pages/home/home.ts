import {Component} from "@angular/core";
import {NavController, NavParams, MenuController} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  username: string;
  password: string;
  searchBarShow: boolean=false;

  constructor(private _navController: NavController, private _navParams: NavParams,private menu: MenuController) {

    this.username = _navParams.get('username');
    this.password = _navParams.get('password');
    this.menu.enable(true);
    this.searchBarShow=false;
  }

  openLeftMenu(){
    this.menu.open();
  }

  enableSearch(){
    this.searchBarShow=!this.searchBarShow;
  }
}
