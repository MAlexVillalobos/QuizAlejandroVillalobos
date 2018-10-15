import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { TvPage } from '../tv/tv';
import { SmartphonePage } from '../smartphone/smartphone';
import { LamparaPage } from '../lampara/lampara';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Bocina = BocinaPage;
  Tv = TvPage;
  Smartphone = SmartphonePage;
  Lampara = LamparaPage;

  constructor(public navCtrl: NavController) {

  }
  bocina(){
    this.navCtrl.push(this.Bocina);
  }
  tv(){
    this.navCtrl.push(this.Tv);
  }
  smartphone(){
    this.navCtrl.push(this.Smartphone);
  }
  lampara(){
    this.navCtrl.push(this.Lampara);
  }
}
