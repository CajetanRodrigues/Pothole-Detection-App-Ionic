import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pothole } from '../models/pothole.model';
import { SinglePotholeComponent } from '../components/single-pothole/single-pothole.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  potholes : any = [
    10,20,30,40,50,60,40
  ]
  constructor(public modalController: ModalController){}
  
  async onViewPothole(pothole : Pothole) {
    const modal = await this.modalController.create({
      component: SinglePotholeComponent,
      componentProps: { id : "Andheri, Mumbai, India" ,
                        image : "https://cdn.road.cc/sites/default/files/styles/main_width/public/images/%5Bparent-node-gallery-title%5D/pot%20hole.jpg?itok=fL-pI5Y0" }
    });
    modal.onDidDismiss().then((detail) => {
      if (detail !== null) {
        console.log('The result:', detail.data);
      }
   });
    return await modal.present();
  };
}
