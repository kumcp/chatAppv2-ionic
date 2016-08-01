import {Component} from "@angular/core";
import {NavController, NavParams, MenuController} from 'ionic-angular';


@Component({
  templateUrl: 'build/menus/popoverGroup.html',
})
export class PopoverGroup{

  contentId: any;

  constructor(private navParams: NavParams) {

  }

  ngOnInit() {
    if (this.navParams.data) {
      this.contentId = this.navParams.data.contentId;
    }
  }


}
