import { Component, OnInit } from '@angular/core';
import { Project } from '../projects/project.model';
import { ProjectService } from '../projects/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  loadedProjects: Project[];
  homeOptions = {
    initialSlide: 0,
    loop: true,
    autoplay: 2000,
    autoplayDisableOnInteraction: false
  };

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.loadedProjects = this.projectService.projects;
  }

}
