import { Component, OnInit } from '@angular/core';
import { PublicationService } from './publication.service';
import { PublicationEntry } from './publication-entry.model';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.page.html',
  styleUrls: ['./publications.page.scss'],
})
export class PublicationsPage implements OnInit {
  loadedPublications: PublicationEntry[];

  constructor(private publicationService: PublicationService) { }

  ngOnInit() {
    this.loadedPublications = this.publicationService.publications;
  }

}
