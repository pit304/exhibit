import { Component, OnInit } from '@angular/core';
import { PublicationEntry } from '../publication-entry.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PublicationService } from '../publication.service';

@Component({
  selector: 'app-publication-detail',
  templateUrl: './publication-detail.page.html',
  styleUrls: ['./publication-detail.page.scss'],
})
export class PublicationDetailPage implements OnInit {
  publication: PublicationEntry;

  constructor(private route: ActivatedRoute,
    private publicationService: PublicationService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('publicationId')) {
        this.navCtrl.navigateBack('/publicatii');
        return;
      }
      this.publication = this.publicationService.getPublication(paramMap.get('publicationId'));
    });
  }

}
