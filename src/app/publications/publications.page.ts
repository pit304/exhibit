import { Component, OnInit } from '@angular/core';
import { PublicationsService } from './publications.service';
import { Publication } from './publication.model';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.page.html',
  styleUrls: ['./publications.page.scss'],
})
export class PublicationsPage implements OnInit {
  loadedPublications: Publication[];

  constructor(private publicationsService: PublicationsService) { }

  ngOnInit() {
    this.loadedPublications = this.publicationsService.publications;
  }

}
