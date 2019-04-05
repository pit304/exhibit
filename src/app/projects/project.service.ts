import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _projects: Project[] = [
    {
      id: '1',
      reference: 'c16',
      title: 'CST',
      locationYear: 'tenero, switzerland, 2017'
    },
    {
      id: '2',
      reference: 'n09',
      title: 'z33',
      locationYear: 'hasselt, belgium, 2011-2019',
    },
    {
      id: '3',
      reference: 'n02',
      title: 'casa due',
      locationYear: 'sorano, italy, 2007-2010'
    },
    {
      id: '4',
      reference: 'c09',
      title: '16th Biennale di Venezia',
      locationYear: 'freespace'
    },
    {
      id: '5',
      reference: 'c08',
      title: 'atelier clerici',
      locationYear: 'milano, italy, 2017'
    },
    {
      id: '6',
      reference: 'p08',
      title: 'w33 handles',
      locationYear: '2015-2018'
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
