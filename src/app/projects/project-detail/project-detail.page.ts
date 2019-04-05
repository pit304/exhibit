import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.page.html',
  styleUrls: ['./project-detail.page.scss'],
})
export class ProjectDetailPage implements OnInit {
  project: Project;

  constructor(private route: ActivatedRoute,
    private projectService: ProjectService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('projectId')) {
        this.navCtrl.navigateBack('/tabs/proiecte');
        return;
      }
      this.project = this.projectService.getProject(paramMap.get('projectId'));
    });
  }

}
