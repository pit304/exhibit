import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Project } from '../projects/project.model';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {
  project: Project;
  imageId: number;
  @ViewChild('slider', {read: ElementRef}) slider: ElementRef;
  sliderOpts = {
    zoom: {
      maxRatio: 3
    },
    noSwipingClass: 'swiper-no-swiping',
  };

  constructor(private navParams: NavParams, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.project = this.navParams.get('project');
    this.imageId = this.navParams.get('imageId');
  }

  zoom(zoomIn: boolean) {
    let zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn) {
      zoom.in();
      console.log('Zooming in');
    } else {
      zoom.out();
      console.log('Zooming out');
    }
  }

  close() {
    console.log('Closing');
    this.modalCtrl.dismiss();
  }

}
