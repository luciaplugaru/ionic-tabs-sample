import { Component } from '@angular/core';
import { App, IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public appCtrl: App) {

  }

  goToFirst() {
    this.appCtrl.getRootNav().setRoot('MoreTabsPage', {selected: 0});
  }

  goToSecond() {
    this.appCtrl.getRootNav().setRoot('MoreTabsPage', {selected: 1});
  }

  goToThird() {
    this.appCtrl.getRootNav().setRoot('MoreTabsPage', {selected: 2});
  }

}
