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
  slideOpts = {
    loop: false,
    effect: 'fade',
    speed: 1000,
    fade: {
      crossFade: true
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  };

  loadedProjects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.loadedProjects = this.projectService.projects;
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

}
