import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../project.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-project-plans',
  templateUrl: './project-plans.component.html',
  styleUrls: ['./project-plans.component.scss'],
})
export class ProjectPlansComponent implements OnInit {
  @Input() project: Project;
  djangoAddress = environment.djangoAddress;

  constructor() { }

  ngOnInit() {}

}
