import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../project.model';

@Component({
  selector: 'app-project-text',
  templateUrl: './project-text.component.html',
  styleUrls: ['./project-text.component.scss'],
})
export class ProjectTextComponent implements OnInit {
  @Input() project: Project;
  constructor() { }

  ngOnInit() {}

}
