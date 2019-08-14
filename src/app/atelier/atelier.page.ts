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
  backupAtelier = Atelier.backup;
  private atelierSub: Subscription;
  isLoading = false;

  constructor(private atelierService: AtelierService) { }

  ngOnInit() {
    this.atelierSub = this.atelierService.atelier.subscribe(atelier => {
      if (atelier) {
        console.log('Here', atelier);
        this.loadedAtelier = atelier;
      } else {
        this.loadedAtelier = new Atelier(0, Atelier.backup);
      }
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.atelierService.fetchAtelier().subscribe(() => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    if (this.atelierSub) {
      this.atelierSub.unsubscribe();
    }
  }
}
