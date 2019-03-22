import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pothole } from '../models/pothole.model';
import { SinglePotholeComponent } from '../components/single-pothole/single-pothole.component';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Instagram } from '@ionic-native/instagram/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  potholes : any = [
    10,20,30,40,50,60,40
  ]
  constructor(public modalController: ModalController,
    private socialSharing: SocialSharing,
    private instagram: Instagram,
    private emailComposer: EmailComposer){}
  
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
  compilemsg(index):string{
    var msg = 'By The Maverick' ;
    return msg.concat(" \n Sent from my Awesome App !");
  }
  regularShare(index){
    var msg = this.compilemsg(index);
    this.socialSharing.share(msg, null, null, null);
  }
  whatsappShare(index){
    var msg  = this.compilemsg(index);
     this.socialSharing.shareViaWhatsApp(msg, null, null);
   }
   twitterShare(index){
    var msg  = this.compilemsg(index);
    this.socialSharing.shareViaTwitter(msg, null, null);
  }
  facebookShare(index){
    var msg  = this.compilemsg(index);
     this.socialSharing.shareViaFacebook(msg, null, null);
   }
   instagramShare(index){

    this.instagram.share('https://cdn.road.cc/sites/default/files/styles/main_width/public/images/%5Bparent-node-gallery-title%5D/pot%20hole.jpg?itok=fL-pI5Y0', 'Caption')
  .then(() => console.log('Shared!'))
  .catch((error: any) => console.error(error));
   }
   composeEmail(){
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
     
     let email = {
       to: 'rigrodtan@gmail.com',
       cc: 'erika@mustermann.de',
       bcc: ['john@doe.com', 'jane@doe.com'],
       attachments: [
         
       ],
       subject: 'Email Composed Success',
       body: 'How are you? Nice greetings from Maverick',
       isHtml: true
     }
     
     // Send a text message using default options
     this.emailComposer.open(email);
  }
}
