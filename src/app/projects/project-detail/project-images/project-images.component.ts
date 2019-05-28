import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../project.model';

@Component({
  selector: 'app-project-images',
  templateUrl: './project-images.component.html',
  styleUrls: ['./project-images.component.scss'],
})
export class ProjectImagesComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit() {}

}
