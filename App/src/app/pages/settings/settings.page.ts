import { Component, OnInit } from '@angular/core';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { Subscription } from 'rxjs';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage{
  percent : number;
  plugStatus : 'string';
  appName : string;
  appPackageName : string;
  appVersionCode : string;
  appVersionNumber : string;
  constructor(private batteryStatus: BatteryStatus,
    private appVersion: AppVersion) { }
  subscription : Subscription;
  
ionViewDidLoad() {
    // watch change in battery status
  //   this.subscription = this.batteryStatus.onChange().subscribe(status => {
  //     console.log(status.level, status.isPlugged);
  //     this.percent = status.level;
  //     // this.plugStatus = status.isPlugged ? 'Plugged' : 'Unplugged';
  // });
 this.appVersion.getAppName().then(
  result => alert( console.log(this.appName)
    
  ), // shows "done!" after 1 second
  error => alert(error) // doesn't run
)
;
 this.appVersion.getPackageName().then(
  result => alert(this.appPackageName = result.toString()), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);
this.appVersion.getVersionCode().then(
  result => alert(this.appVersionCode = result.toString()), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);
this.appVersion.getVersionNumber().then(
  result => alert( this.appVersionNumber =  result.toString()), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);
}

  // ionViewDidLeave(){
  //   this.subscription.unsubscribe();

  // }

}
