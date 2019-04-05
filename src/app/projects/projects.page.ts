import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  loadedProjects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.loadedProjects = this.projectService.projects;
  }
}
