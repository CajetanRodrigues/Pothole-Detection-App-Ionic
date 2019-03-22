import { Component, OnInit } from '@angular/core';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  percent : number;
  plugStatus : string;
  constructor(private batteryStatus: BatteryStatus) { }
  subscription : Subscription;
  ngOnInit() {
    // watch change in battery status
   this.subscription = this.batteryStatus.onChange().subscribe(status => {
  console.log(status.level, status.isPlugged);
  this.percent = status.level;
  this.plugStatus = status.isPlugged ? 'Plugged' : 'Unplugged';
});
  }
  ionViewDidLeave(){
    this.subscription.unsubscribe();

  }

}
