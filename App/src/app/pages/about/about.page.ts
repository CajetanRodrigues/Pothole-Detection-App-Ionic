import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private videoPlayer: VideoPlayer) { }

  ngOnInit() {
  
  }
  playVideo(){
    this.videoPlayer.play('../../../assets/video/test.mp4').then(() => {
      console.log('video completed');
     }).catch(err => {
      console.log(err);
     });
  }
  playVideo2(){
    this.videoPlayer.play('https://youtu.be/TcMBFSGVi1c').then(() => {
      console.log('video completed');
     }).catch(err => {
      console.log(err);
     });
  }
  
  stopPlayingVideo(){
    this.videoPlayer.close();

  }

}
