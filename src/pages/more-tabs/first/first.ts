import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FirstPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
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
