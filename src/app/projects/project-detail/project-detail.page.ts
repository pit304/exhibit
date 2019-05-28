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
        this.navCtrl.navigateBack('/proiecte');
        return;
      }
      this.project = this.projectService.getProject(paramMap.get('projectId'));
    });
  }

  slideOptsProgressbar = {
    pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: (swiper, current, total) => {
            return this.customProgressBar(current, total);
        }
    }
};

private customProgressBar(current: number, total: number): string {
    const ratio: number = current / total;

    const progressBarStyle: string = 'style=\'transform: translate3d(0px, 0px, 0px) scaleX(' + ratio + ') scaleY(1); transition-duration: 300ms;\'';
    const progressBar: string = '<span class=\'swiper-pagination-progressbar-fill\' ' + progressBarStyle + '></span>';

    let progressBarContainer: string = '<div class=\'swiper-pagination-progressbar\' style=\'height: 4px; top: 6px; width: 100%;\'>';
    progressBarContainer += progressBar;
    progressBarContainer += '</span></div>';

    return progressBarContainer;
}
}
