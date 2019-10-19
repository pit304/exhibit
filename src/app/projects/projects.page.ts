import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './project.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit, OnDestroy {

  loadedProjects: Project[];
  private projectsSub: Subscription;
  isLoading = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectsSub = this.projectService.projects.subscribe(projects => {
      this.loadedProjects = projects;
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.projectService.fetchProjects().subscribe(data => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    if (this.projectsSub) {
      this.projectsSub.unsubscribe();
    }
  }
}
