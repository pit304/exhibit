import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from '../projects/project.model';
import { ProjectService } from '../projects/project.service';
import { IonSlides } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  
  djangoAddress = environment.djangoAddress;
  slidesOpts = {
    loop: false,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    fadeEffect: {
      crossFade: true
    },
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.params = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { slides } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          let tx = -offset$$1;
          if (!swiper.params.virtualTranslate) {
            tx -= swiper.translate;
          }
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl
            .css({
              opacity: slideOpacity,
            })
            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, $wrapperEl } = swiper;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          slides.transitionEnd(() => {
            if (eventTriggered) {
              return;
            }
            if (!swiper || swiper.destroyed) {
              return;
            }
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    }
  };

  loadedProjects: Project[];
  private projectsSub: Subscription;
  isLoading = false;
  
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectsSub = this.projectService.projects.subscribe(projects => {
      this.loadedProjects = projects;
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.projectService.fetchProjects().subscribe(data => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    if (this.projectsSub) {
      this.projectsSub.unsubscribe();
    }
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

}
