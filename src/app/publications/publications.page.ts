import { Component, OnInit, OnDestroy } from '@angular/core';
import { PublicationsService } from './publications.service';
import { Publication } from './publication.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.page.html',
  styleUrls: ['./publications.page.scss'],
})
export class PublicationsPage implements OnInit, OnDestroy {

  loadedPublications: Publication[];
  private publicationsSub: Subscription;
  isLoading = false;

  constructor(private publicationsService: PublicationsService) { }

  ngOnInit() {
    this.publicationsSub = this.publicationsService.publications.subscribe(publications => {
      this.loadedPublications = publications;
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.publicationsService.fetchPublications().subscribe(data => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    if (this.publicationsSub) {
      this.publicationsSub.unsubscribe();
    }
  }
}
