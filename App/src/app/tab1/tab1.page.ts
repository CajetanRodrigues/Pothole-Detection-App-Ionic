import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  currentImage: any;

  constructor(private camera: Camera,
    private httpClient : HttpClient) { }
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
      this.postPicture();
      console.log("Picture Posted");
    }, (err) => {
     // Handle error
     console.log("Camera issue:" + err);
    });

  }
  postPicture(){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
      };
    
    const pothole = {
      image : this.currentImage

    }
    
    this.httpClient.post("http://localhost:8080/rest/post-pothole", pothole, httpOptions)
    .subscribe(data => {
      console.log(JSON.stringify(data));
     }, error => {
      console.log(error);
    });
    
  }
  

  
 
  
    
 
 
}
