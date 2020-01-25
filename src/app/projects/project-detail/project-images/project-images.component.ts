import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../project.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-project-images',
  templateUrl: './project-images.component.html',
  styleUrls: ['./project-images.component.scss'],
})
export class ProjectImagesComponent implements OnInit {
  @Input() project: Project;
  djangoAddress = environment.djangoAddress;

  constructor() { }

  ngOnInit() {}

}
