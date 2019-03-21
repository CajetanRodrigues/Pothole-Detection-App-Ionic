import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-single-pothole',
  templateUrl: './single-pothole.component.html',
  styleUrls: ['./single-pothole.component.scss'],
})
export class SinglePotholeComponent implements OnInit {
  id: number;
  image : string;
  constructor(private modalController: ModalController,
    private navParams: NavParams) {
}
 ionViewWillEnter() {
      this.id = this.navParams.get('id');
      this.image = this.navParams.get('image');
    }

    async myDismiss() {
      await this.modalController.dismiss("Success");
    }
  ngOnInit() {}

}
