import { Component, OnInit, OnDestroy } from '@angular/core';
import { Atelier } from './atelier.model';
import { Subscription } from 'rxjs';
import { AtelierService } from './atelier.service';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.page.html',
  styleUrls: ['./atelier.page.scss'],
})
export class AtelierPage implements OnInit, OnDestroy {

  loadedAtelier: Atelier;
  private atelierSub: Subscription;
  isLoading = false;

  constructor(private atelierService: AtelierService) { }

  ngOnInit() {
    this.atelierSub = this.atelierService.atelier.subscribe(atelier => {
        this.loadedAtelier = atelier;
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.atelierService.fetchAtelier().subscribe(data => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    if (this.atelierSub) {
      this.atelierSub.unsubscribe();
    }
  }
}
