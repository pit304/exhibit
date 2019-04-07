import { Injectable } from '@angular/core';
import { ProjectService } from '../projects/project.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private projectService: ProjectService) { }

  get projects() {
    return this.projectService.projects;
  }

  getProject(id: string) {
    return this.projectService.getProject(id);
  }
}
