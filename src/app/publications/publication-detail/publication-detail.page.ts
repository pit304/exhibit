import { Component, OnInit } from '@angular/core';
import { Publication } from '../publication.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PublicationsService } from '../publications.service';

@Component({
  selector: 'app-publication-detail',
  templateUrl: './publication-detail.page.html',
  styleUrls: ['./publication-detail.page.scss'],
})
export class PublicationDetailPage implements OnInit {
  publication: Publication;

  constructor(private route: ActivatedRoute,
    private publicationsService: PublicationsService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('publicationId')) {
        this.navCtrl.navigateBack('/publicatii');
        return;
      }
      this.publication = this.publicationsService.getPublication(paramMap.get('publicationId'));
    });
  }

}
