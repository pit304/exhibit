import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from '../projects/project.model';
import { ProjectService } from '../projects/project.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  loadedProjects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.loadedProjects = this.projectService.projects;
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
    slides.options.initialSlide = 0;
    slides.options.autoplay = 5000;
    slides.options.loop = true;
    slides.options.autoplayDisableOnInteraction = false;
  }

}
