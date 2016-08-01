import {Component} from "@angular/core";
import {NavController, Popover, NavParams, MenuController} from 'ionic-angular';
import {PopoverGroup} from '../../menus/popoverGroup';

// @Component({
//   template: `<ion-list class="popover-page">
//
//     <ion-item class="text-times-new-roman">
//       <ion-label>Times New Roman</ion-label>
//       <ion-radio value="Times New Roman"></ion-radio>
//     </ion-item>
//   </ion-list>`,
// })
// class PopoverGroup{
//
//   contentId: any;
//
//   constructor(private navParams: NavParams) {
//
//   }
//
//   ngOnInit() {
//     if (this.navParams.data) {
//       this.contentId = this.navParams.data.contentId;
//     }
//   }
//
//
// }


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

  presentPopover(ev){
    let popover = Popover.create(PopoverGroup,{
      contentId: 1,
    });

    this._navController.present(popover, {
      ev: ev
    });
  }
}
