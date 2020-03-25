import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Project } from '../../project.model';
import { environment } from '../../../../environments/environment';
import { ImageModalPage } from '../../../image-modal/image-modal.page';

@Component({
  selector: 'app-project-plans',
  templateUrl: './project-plans.component.html',
  styleUrls: ['./project-plans.component.scss']
})
export class ProjectPlansComponent implements OnInit {
  @Input() project: Project;
  djangoAddress = environment.djangoAddress;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  openPreview(imageId: number) {
    this.modalCtrl
      .create({
        component: ImageModalPage,
        componentProps: {
          projectId: this.project.id,
          images: this.project.plans,
          imageId: imageId,
          backup: this.project.backup,
          section: 'plans'
        }
      })
      .then(modalEl => {
        modalEl.present();
      });
  }
}
