import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';

interface ProjectData {
  results: Project[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  private _projects = new BehaviorSubject<Project[]> (Project.backup);

  get projects() {
    return this._projects.asObservable();
  }

  getProject(id: string) {
    return this.http.get<Project>(
      `http://localhost:8000/ws/projects/${id}/`
    )
    .pipe(
      map(project => {
        return new Project(+id,
              project.project_title,
              project.project_text,
              project.main_image,
              project.images,
              project.plans);
      })
    );
  }

  fetchProjects() {
    return this.http
      .get<ProjectData>(
        'http://localhost:8000/ws/projects?active=true'
      )
      .pipe(
        map(projectData => {
          if (projectData.results.length > 0) {
            return projectData.results;
          } else {
            throw new Error('No project data, using default');
          }
        }),
        tap(projects => {
          this._projects.next(projects);
        }), catchError(err => {
          console.log('HTTP error or no projects: ' + err);
          this._projects.next(Project.backup);
          return of([]);
        })
      );
  }
}
