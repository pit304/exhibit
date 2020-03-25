import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

import { ProjectImage } from '../projects/project-image.model';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {
  images: ProjectImage[];
  projectId: number;
  imageId: number;
  backup: boolean;
  isImageSection = true;
  @ViewChild('slider', {read: ElementRef}) slider: ElementRef;
  sliderOpts = {
    zoom: {
      maxRatio: 3
    },
    noSwipingClass: 'swiper-no-swiping',
  };

  constructor(private navParams: NavParams, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.images = this.navParams.get('images');
    this.imageId = this.navParams.get('imageId');
    this.backup = this.navParams.get('backup');
    this.projectId = this.navParams.get('projectId');
    this.isImageSection = this.navParams.get('section') === 'images';
  }

  zoom(zoomIn: boolean) {
    const zoom = this.slider.nativeElement.swiper.zoom;
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
