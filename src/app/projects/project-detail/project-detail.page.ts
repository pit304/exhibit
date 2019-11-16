import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { Project } from '../project.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.page.html',
  styleUrls: ['./project-detail.page.scss'],
})
export class ProjectDetailPage implements OnInit, OnDestroy {
  project: Project;
  private projectSub: Subscription;
  isLoading = false;

  slideOptsProgressbar = {
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      renderCustom: (swiper, current, total) => {
          return this.customProgressBar(current, total);
      }
    }
  };

  constructor(private route: ActivatedRoute,
    private projectService: ProjectService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('projectId')) {
        this.navCtrl.navigateBack('/proiecte');
        return;
      }
      this.isLoading = true;
      this.projectSub = this.projectService.getProject(paramMap.get('projectId'))
      .subscribe(project => {
        this.project = project;
        this.isLoading = false;
      }, error => {
        const projectId = +paramMap.get('projectId');
        if (projectId > 0 && projectId < 4) {
          this.project = Project.backup[3-projectId];
        } else {
          console.log('Could not load project ' + projectId);
          this.router.navigate(['/proiecte']);
        }
        this.isLoading = false;
      });
    });
  }

  ngOnDestroy() {
    if (this.projectSub) {
      this.projectSub.unsubscribe();
    }
  }

private customProgressBar(current: number, total: number): string {
    const ratio: number = current / total;

    const progressBarStyle: string = 'style=\'transform: translate3d(0px, 0px, 0px) scaleX(' + ratio + ') scaleY(1); transition-duration: 300ms;\'';
    const progressBar: string = '<span class=\'swiper-pagination-progressbar-fill\' ' + progressBarStyle + '></span>';

    let progressBarContainer = '<div class=\'swiper-pagination-progressbar\' style=\'height: 4px; top: 6px; width: 100%;\'>';
    progressBarContainer += progressBar;
    progressBarContainer += '</span></div>';

    return progressBarContainer;
}
}
