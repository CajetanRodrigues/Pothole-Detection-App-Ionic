import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Camera } from '@ionic-native/camera/ngx';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SinglePotholeComponent } from './components/single-pothole/single-pothole.component';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Instagram } from '@ionic-native/instagram/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { Sensors, TYPE_SENSOR } from '@ionic-native/sensors/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';

@NgModule({
  declarations: [AppComponent,
  MenuItemComponent,
  SinglePotholeComponent],
  entryComponents: [SinglePotholeComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    SocialSharing,
    Instagram ,
    Toast,
    Vibration,
    Sensors,
    Flashlight,
    EmailComposer ,
    CallNumber ,
    BatteryStatus ,
    AppVersion,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
