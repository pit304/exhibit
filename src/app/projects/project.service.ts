import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _projects: Project[] = [
    {
      id: '1',
      reference: 'blueResidence2',
      title: 'Blue Residence 2',
      locationYear: 'tenero, switzerland, 2017'
    },
    {
      id: '2',
      reference: 'cattia',
      title: 'CATTIA',
      locationYear: 'hasselt, belgium, 2011-2019',
    },
    {
      id: '3',
      reference: 'sitei',
      title: 'Sitei',
      locationYear: 'sorano, italy, 2007-2010'
    }
  ];

  constructor() { }

  get projects() {
    return [...this._projects];
  }

  getProject(id: string) {
    return {...this._projects.find(
      project => project.id === id
    )};
  }
}
