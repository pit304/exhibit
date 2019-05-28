import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProjectDetailPage } from './project-detail.page';
import { ProjectTextComponent } from './project-text/project-text.component';
import { ProjectImagesComponent } from './project-images/project-images.component';
import { ProjectPlansComponent } from './project-plans/project-plans.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectDetailPage, ProjectTextComponent, ProjectImagesComponent, ProjectPlansComponent]
})
export class ProjectDetailPageModule {}
