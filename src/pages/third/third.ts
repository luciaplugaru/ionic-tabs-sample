import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the ThirdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdPage');
  }

  goToHome() {
    this.appCtrl.getRootNav().setRoot('TabsPage', {selected: 0});
  }

  goToAbout() {
    this.appCtrl.getRootNav().setRoot('TabsPage', {selected: 1});
  }

  goToContact() {
    this.appCtrl.getRootNav().setRoot('TabsPage', {selected: 2});
  }

}
