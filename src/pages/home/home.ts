import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public screenWidth : any;
  public screenHeight : any;
  public screenPixelRatio : any;

  constructor(public navCtrl: NavController) {
    console.log("window Screen width " + window.screen.width);
    console.log("window Screen height " + window.screen.height);
    console.log("window Screen Ratio " + window.devicePixelRatio)

    this.screenWidth = window.screen.width;
    this.screenHeight = window.screen.height;
    this.screenPixelRatio = window.devicePixelRatio;
  }

}
