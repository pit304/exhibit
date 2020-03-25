import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Project } from '../../project.model';
import { environment } from 'src/environments/environment';
import { ImageModalPage } from '../../../image-modal/image-modal.page';

@Component({
  selector: 'app-project-images',
  templateUrl: './project-images.component.html',
  styleUrls: ['./project-images.component.scss']
})
export class ProjectImagesComponent implements OnInit {
  @Input() project: Project;
  djangoAddress = environment.djangoAddress;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  openPreview(imageId: number) {
    this.modalCtrl
      .create({
        component: ImageModalPage,
        componentProps: { project: this.project, imageId: imageId }
      })
      .then(modalEl => {
        modalEl.present();
      });
  }
}
