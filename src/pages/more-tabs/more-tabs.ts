import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirstPage } from "../first/first";
import { SecondPage } from "../second/second";
import { ThirdPage } from "../third/third";

/**
 * Generated class for the MoreTabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@IonicPage()
@Component({
  selector: 'page-more-tabs',
  templateUrl: 'more-tabs.html'
})
export class MoreTabsPage {

  firstRoot = 'FirstPage';
  secondRoot = 'SecondPage';
  thirdRoot = 'ThirdPage';


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
